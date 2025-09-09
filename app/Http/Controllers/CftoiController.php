<?php

namespace App\Http\Controllers;

use App\Models\cftoi;
use Illuminate\Http\Request;

class CftoiController extends Controller
{
        public function index()
    {
        return response()->json(cftoi::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'description' => 'sometimes|required|string',

        ]);

        $cftoi = cftoi::create($validated);

        return response()->json(['message' => 'Created successfully', 'data' => $cftoi], 201);
    }

    public function show(cftoi $cf_topicof_interest)
    {
       return response()->json($cf_topicof_interest);
    }


    public function edit(cftoi $cftoi)
    {
        return response()->json($cftoi);
    }

    public function update(Request $request, cftoi $cf_topicof_interest)
    {
        $validated = $request->validate([
            'description' => 'sometimes|required|string',

        ]);

        $cf_topicof_interest->update($validated);

        return response()->json(['message' => 'Updated successfully', 'data' => $cf_topicof_interest]);
    }

    public function destroy(cftoi $cf_topicof_interest)
    {
        $cf_topicof_interest->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}