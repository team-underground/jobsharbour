<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Rules\CheckCurrentPassword;
use Illuminate\Support\Facades\Hash;

class SettingsController extends Controller
{
    public function changePassword(Request $request)
    {
        $this->validate($request, [
            'current_password' => ['required', new CheckCurrentPassword],
            'password' => 'required|min:6|confirmed'
        ]);

        $user = auth()->user();

        $user->password = Hash::make($request->password);
        $user->save();

        session()->flash('success', 'Your password has been changed successfully. Please login with your new password next time.');

        return redirect()->back();
    }

    public function updateProfile(Request $request)
    {
        $this->validate($request, [
            'name' => ['required']
        ]);

        $user = User::findOrFail(auth()->user()->id);

        $user->name = $request->name;
        $user->save();

        session()->flash('success', 'Profile Name Updated Successfully!');

        return redirect()->back();
    }
}
