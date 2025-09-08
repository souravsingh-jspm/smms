<?php

namespace App\Http\Controllers;

use App\Models\hpch;
use Illuminate\Http\Request;

class HpchController extends Controller
{

    public function index()
    {
        return response()->json(hpch::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'icon' => 'required|string|max:255',
            'date' => 'required|date',
            'description' => 'required|string',
        ]);

        $hpch = hpch::create($validated);

        return response()->json(['message' => 'Created successfully', 'data' => $hpch], 201);
    }

    public function show(hpch $conferencehigh_light)
    {
       return response()->json($conferencehigh_light);
    }


    public function edit(hpch $hpch)
    {
        return response()->json($hpch);
    }

    public function update(Request $request, hpch $conferencehigh_light)
    {
        $validated = $request->validate([
            'icon' => 'sometimes|required|string|max:255',
            'date' => 'sometimes|required|date',
            'description' => 'sometimes|required|string',
        ]);

        $conferencehigh_light->update($validated);

        return response()->json(['message' => 'Updated successfully', 'data' => $conferencehigh_light]);
    }

    public function destroy(hpch $conferencehigh_light)
    {
        $conferencehigh_light->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}