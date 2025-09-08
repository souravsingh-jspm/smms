<?php

namespace App\Http\Controllers;

use App\Models\hpid;
use Illuminate\Http\Request;

class HpidController extends Controller
{
      public function index()
    {
        return response()->json(hpid::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon' => 'required|string',
        ]);

        $hpid = hpid::create($validated);

        return response()->json(['message' => 'Created successfully', 'data' => $hpid], 201);
    }

    public function show(hpid $important_date)
    {
       return response()->json($important_date);
    }


    public function edit(hpid $hpid)
    {
        return response()->json($hpid);
    }

    public function update(Request $request, hpid $important_date)
    {
        $validated = $request->validate([
            'title' => 'sometimes|required|string',
            'description' => 'sometimes|required|string',
            'icon' => 'sometimes|required|string',
        ]);

        $important_date->update($validated);

        return response()->json(['message' => 'Updated successfully', 'data' => $important_date]);
    }

public function destroy(hpid $important_date)
{
    $important_date->delete();
    return response()->json(['message' => 'Deleted successfully']);
}
}