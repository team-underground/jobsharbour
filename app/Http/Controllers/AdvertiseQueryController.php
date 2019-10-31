<?php

namespace App\Http\Controllers;

use App\AdvertiseQuery;
use Illuminate\Http\Request;

class AdvertiseQueryController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $input = $this->validate($request, [
            'name' => ['required'],
            'email' => ['required', 'email'],
            'phone' => ['required', 'regex:/^[6789]\d{9}$/'],
            'company' => ['required'],
            'how_can_we_help' => ['required']
        ]);

        AdvertiseQuery::create($input);
        //TODO send a mail to the user regarding his interest and tell them that we will get back to them soon
        session()->flash('flash-success', 'Thank you for your interest.');
        return back();
    }
}
