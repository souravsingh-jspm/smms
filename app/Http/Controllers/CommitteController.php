<?php

namespace App\Http\Controllers;

use App\Models\Committe;
use Illuminate\Http\Request;

class CommitteController extends Controller
{
    public function index()
    {
        $committe = Committe::latest()->get();
        return response()->json($committe);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            'content' => 'required|string',
        ]);

        $committe = Committe::create($validated);

        return response()->json($committe, 201);
    }


    public function show(Committe $committe)
    {
        return response()->json($committe);
    }

    public function update(Request $request, Committe $committe)
    {
        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            'content' => 'required|string',
        ]);

        $committe->update($validated);

        return response()->json($committe);
    }

    public function destroy(Committe $committe)
    {
        $committe->delete();

        return response()->json(null, 204);
    }
}