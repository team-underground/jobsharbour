<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Subscriber;
use App\Mail\JobAlert;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Foundation\Auth\VerifiesEmails;


class SubscriberController extends Controller
{
    use VerifiesEmails;
    protected $redirectTo = '/';

    public function __construct()
    {
        $this->middleware('signed')->only('verify');
        $this->middleware('throttle:6,1')->only('verify', 'resend');
    }
    public function createSubscriptionPlane()
    {
        $plan = app('rinvex.subscriptions.plan')->create([
            'name' => 'Subscribe Job Harbour',
            'description' => 'Job alert',
            'price' => 9.99,
            'signup_fee' => 1.99,
            'invoice_period' => 1,
            'invoice_interval' => 'month',
            'trial_period' => 15,
            'trial_interval' => 'day',
            'sort_order' => 1,
            'currency' => 'USD',
        ]);
    }


    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:subscribers'],
        ]);

        DB::transaction(function () use ($request) {
            $subscriber =  Subscriber::create([
                'name' => $request->name,
                'email' => $request->email
            ]);
            $plan = app('rinvex.subscriptions.plan')->find(1);
            $subscriber->newSubscription('Pro', $plan);
            $when = Carbon::now()->addMinutes(1);
            $subscriber->unsubscribeUrl = url('subscriber/cancel?email=') . $subscriber->email;
            // dd($subscriber);
            Mail::to($subscriber->email)->later($when, new JobAlert($subscriber));
        });

        session()->flash('success', 'You are subscribed to our job alert');
        return redirect()->back();
    }

    public function cancelSubscription(Request $request)
    {

        $this->validate($request, [
            'email' => 'required'
        ]);
        $plan = app('rinvex.subscriptions.plan')->find(1);
        $subscriber = Subscriber::where('email', $request->email)->first();
        $plan = $plan->subscriptions()->where('user_id', $subscriber->id)->first();
        $plan->cancel();
        session()->flash('success', 'You are unsubscribed to our Job Alert');
        return redirect('/subscriber/cancel-page');
    }

    public function show(Request $request)
    {
        return $request->user()->hasVerifiedEmail()
            ? redirect($this->redirectPath())
            : view('auth.verify');
    }

    /**
     * Mark the authenticated user's email address as verified.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function verify(Request $request)
    {
        if (!hash_equals((string) $request->route('id'), (string) $request->user()->getKey())) {
            throw new AuthorizationException;
        }

        if (!hash_equals((string) $request->route('hash'), sha1($request->user()->getEmailForVerification()))) {
            throw new AuthorizationException;
        }

        if ($request->user()->hasVerifiedEmail()) {
            return redirect($this->redirectPath());
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        return redirect($this->redirectPath())->with('verified', true);
    }

    /**
     * Resend the email verification notification.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function resend(Request $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return redirect($this->redirectPath());
        }

        $request->user()->sendEmailVerificationNotification();

        return back()->with('resent', true);
    }
}
