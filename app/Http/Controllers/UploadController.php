<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\SupportFacades\Storage;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        if ($request->has('file')) {
            // Upload the file
            $path = $request->file('file')->store('uploadtests');

            return $path;
            // Return the new file name
        }
    }

    public function delete(Request $request)
    {
        $requestData = $request->get('file');
        $data = file_get_contents("php://input");
        // Log::info($requestData);
        // Log::info($data);
        $fileTobeDeleted = $requestData ? $requestData : $data;
        if ($fileTobeDeleted) {
            $exists = Storage::disk('public')->exists($fileTobeDeleted);
            if ($exists) {
                Storage::delete($fileTobeDeleted);
            }
            return 'Deleted';
        } else {
            return response('file not found', 500);
        }
    }
}
