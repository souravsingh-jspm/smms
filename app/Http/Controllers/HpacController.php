<?php

namespace App\Http\Controllers;

use App\Models\hpac;
use Illuminate\Http\Request;

class HpacController extends Controller
{
      public function index()
    {
        return response()->json(hpac::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'conference_venue' => 'sometimes|required|string',
            'conference_heading' => 'sometimes|required|string',
            'conference_detail' => 'sometimes|required|string',
        ]);

        $hpac = hpac::create($validated);

        return response()->json(['message' => 'Created successfully', 'data' => $hpac], 201);
    }

    public function show(hpac $about_conference)
    {
       return response()->json($about_conference);
    }


    public function edit(hpac $hpac)
    {
        return response()->json($hpac);
    }

    public function update(Request $request, hpac $about_conference)
    {
        $validated = $request->validate([
            'conference_venue' => 'sometimes|required|string',
            'conference_heading' => 'sometimes|required|string',
            'conference_detail' => 'sometimes|required|string',
        ]);

        $about_conference->update($validated);

        return response()->json(['message' => 'Updated successfully', 'data' => $about_conference]);
    }

    public function destroy(hpac $about_conference)
    {
        $about_conference->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}