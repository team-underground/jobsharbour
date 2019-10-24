<?php

namespace App\Http\Controllers;

use App\Mail\JobAlert;
use App\Subscriber;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;

class SubscriberController extends Controller
{

    public function __construct()
    {
        // $this->middleware('signed')->only('verify');
        // $this->middleware('throttle:6,1')->only('verify', 'resend');
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
            'email' => ['required'],
        ]);
        $subscriber =  Subscriber::create([
            'name' => $request->name,
            'email' => $request->email
        ]);
        $plan = app('rinvex.subscriptions.plan')->find(1);
        $subscriber->newSubscription('main', $plan);
        $when = Carbon::now()->addMinutes(1);
        Mail::to($subscriber->email)->later($when, new JobAlert($subscriber->name));
        session()->flash('success', 'You are subscribed to our job alert');
        return redirect()->back();
    }

    public function cancelSubscription(Request $request)
    {
        $this->validate($request, [
            'email' => 'required'
        ]);
        $subscriber = Subscriber::where('email', $request->email)->first();
        $subscriber->subscription('main')->cancel();
        session()->flash('success', 'We are sorry to see you go');
        return redirect()->back();
    }

    public function update(Request $request, Subscriber $subscriber)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Subscriber  $subscriber
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subscriber $subscriber)
    {
        //
    }
}
