<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Subscription;
use App\Enums\UserType;
use App\Enums\PackageType;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Mail;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        $user = DB::transaction(function () use ($data) {
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
                'type' => $data['type']
            ]);
            if ($user->type == UserType::Consultancy()->key) {
                Subscription::create([
                    'user_id' => $user->id,
                    'package_id' => PackageType::ConsultancyBasic()->value
                ]);
            }
            if ($user->type == UserType::Employer()->key) {
                Subscription::create([
                    'user_id' => $user->id,
                    'package_id' => PackageType::CompanyBasic()->value
                ]);
            }
            Mail::to($user->email)->queue(new WelcomeMail($user));
            return $user;
        });
        return $user;
    }
}
