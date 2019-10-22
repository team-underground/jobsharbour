<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class SettingsController extends Controller
{
    public function changePassword(Request $request)
    {
        $this->validate($request, [
            'current_password' => 'required',
            'password' => 'required|min:6|confirmed'
        ]);

        $user = auth()->user();

        if (Hash::check($request->current_password, $user->password)) {
            $user->password = Hash::make($request->password);
            $user->save();
            session()->flash('success', 'Password Updated Successfully!');
            return redirect()->back();
        } else {
            session()->flash('error', 'Current Password is incorrect');

            return redirect()->back();
        }
    }

    public function changeEmail(Request $request)
    {

        $user = User::find(auth()->user()->id);
        if ($user) {
            $user->name = $request->name;
            $user->save();
            session()->flash('success', 'Profile Name Updated Successfully!');
            return redirect()->back();
        } else {
            return response([
                'status' => 'error',
                'Message' => 'Password cannot be updated'
            ]);
        }
    }
}
