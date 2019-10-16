<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Enums\IndustryType;
use Illuminate\Support\Arr;
use App\Enums\UserType;
use Inertia\Inertia;
use App\Company;
use Illuminate\Support\Facades\Gate;

class CompaniesController extends Controller
{
    public function index()
    {
        $companies = Company::query()
            ->filter(request()->only('search'))
            ->role()
            ->orderByDesc('created_at')
            ->simplePaginate(6);

        $filters = request()->all('search');

        return Inertia::render('Companies/Index', compact('companies', 'filters'));
    }

    public function create()
    {
        $industries = IndustryType::toSelectArray();

        return Inertia::render('Companies/Create', compact('industries'));
    }

    public function store(Request $request)
    {
        $input = $this->validate($request, [
            'company_logo' => 'required|image|mimes:jpeg,png,jpg|max:1024',
            'company_name' => ['required'],
            'company_website' => ['required', 'url'],
            'company_description' => ['required'],
            'company_industry' => ['required'],
            'company_no_of_employees' => ['required'],
            'company_benefits' => ['required']
        ], [
            'company_logo.max' => 'Image size must me less than 1 MB',
            'company_logo.dimensions' => 'Image must be atleast 200x200px as a png or jpeg file'
        ]);

        // Start a try/catch block
        DB::transaction(function () use ($input, $request) {

            $companyCreated = Company::create($request->only([
                'company_name',
                'company_website',
                'company_description',
                'company_industry',
                'company_no_of_employees',
                'company_benefits'
            ]) + [
                'user_id' => auth()->user()->id,
                'company_logo' => $request->file('company_logo') ? $request->file('company_logo')->store('company') : null
            ]);
        });
        // End

        session()->flash('success', 'Company details successfully saved.');

        return redirect()->route('admin.companies');
    }

    public function edit($uuid, Request $request)
    {
        $company = Company::findByUuidOrFail($uuid);

        $company['can'] = [
            'delete' => Gate::allows('delete-company', $company),
            'edit' => Gate::allows('update-company', $company)
        ];

        $industries = IndustryType::toSelectArray();

        return Inertia::render('Companies/Edit', compact('company', 'industries'));
    }

    public function update($uuid, Request $request)
    {
        $company = Company::findByUuidOrFail($uuid);

        $input = $this->validate($request, [
            'company_logo' => 'nullable|image|mimes:jpeg,png,jpg|max:1024',
            'company_name' => ['required'],
            'company_website' => ['required', 'url'],
            'company_description' => ['required'],
            'company_industry' => ['required'],
            'company_no_of_employees' => ['required'],
            'company_benefits' => ['required']
        ], [
            'company_logo.max' => 'Image size must me less than 1 MB',
            'company_logo.dimensions' => 'Image must be atleast 200x200px as a png or jpeg file'
        ]);

        // dd($input);

        if ($input['company_industry'] != null && $request->file('company_logo')) {
            $company->update([
                'company_logo' => $request->file('company_logo')->store('company')
            ]);
        }

        $company->update($request->only([
            'company_name',
            'company_website',
            'company_description',
            'company_no_of_employees',
            'company_benefits'
        ]) + [
            'company_industry' => (int) $input['company_industry']
        ]);

        session()->flash('success', 'Company Details Updated.');

        return back();
    }

    public function deleteLogo($uuid)
    {
        $company = Company::findByUuidOrFail($uuid);

        // remove from the storage first
        $exists = Storage::disk('public')->exists($company->company_logo);
        if ($exists) {
            Storage::delete($company->company_logo);
        }

        $company->company_logo = null;
        $company->save();

        session()->flash('success', 'Job Post successfully deleted.');

        return back();
    }
}
