<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        $users = User::query()
            ->filter(request()->only('search'))
            ->where('type', '!=', 'Administrator')
            ->orderByDesc('created_at')
            ->simplePaginate(10);

        $filters = request()->all('search');

        return Inertia::render('Users/Index', compact('users', 'filters'));
    }
}
