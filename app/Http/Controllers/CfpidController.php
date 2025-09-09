<?php

namespace App\Http\Controllers;

use App\Models\cfpid;
use Illuminate\Http\Request;

class CfpidController extends Controller
{
      public function index()
    {
        return response()->json(cfpid::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'icon' => 'sometimes|required|string',
            'title' => 'sometimes|required|string',
            'date' => 'sometimes|required|string',
        ]);

        $cfpid = cfpid::create($validated);

        return response()->json(['message' => 'Created successfully', 'data' => $cfpid], 201);
    }

    public function show(cfpid $cf_important_date)
    {
       return response()->json($cf_important_date);
    }


    public function edit(cfpid $cfpid)
    {
        return response()->json($cfpid);
    }

    public function update(Request $request, cfpid $cf_important_date)
    {
        $validated = $request->validate([
           'icon' => 'sometimes|required|string',
            'title' => 'sometimes|required|string',
            'date' => 'sometimes|required|string',
        ]);

        $cf_important_date->update($validated);

        return response()->json(['message' => 'Updated successfully', 'data' => $cf_important_date]);
    }

    public function destroy(cfpid $cf_important_date)
    {
        $cf_important_date->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}