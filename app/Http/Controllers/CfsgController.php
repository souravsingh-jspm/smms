<?php

namespace App\Http\Controllers;

use App\Models\cfsg;
use Illuminate\Http\Request;

class CfsgController extends Controller
{
       public function index()
    {
        return response()->json(cfsg::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'icon' => 'sometimes|required|string',
            'title' => 'sometimes|required|string',
            'description' => 'sometimes|required|string',
        ]);

        $cfsg = cfsg::create($validated);

        return response()->json(['message' => 'Created successfully', 'data' => $cfsg], 201);
    }

    public function show(cfsg $cf_submission_guideline)
    {
       return response()->json($cf_submission_guideline);
    }


    public function edit(cfsg $cfsg)
    {
        return response()->json($cfsg);
    }

    public function update(Request $request, cfsg $cf_submission_guideline)
    {
        $validated = $request->validate([
            'icon' => 'sometimes|required|string',
            'title' => 'sometimes|required|string',
            'description' => 'sometimes|required|string',
        ]);

        $cf_submission_guideline->update($validated);

        return response()->json(['message' => 'Updated successfully', 'data' => $cf_submission_guideline]);
    }

    public function destroy(cfsg $cf_submission_guideline)
    {
        $cf_submission_guideline->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}