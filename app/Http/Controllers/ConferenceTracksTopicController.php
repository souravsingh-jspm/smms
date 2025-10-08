<?php

namespace App\Http\Controllers;

use App\Models\ConferenceTracksTopic;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConferenceTracksTopicController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $conferenceTracksTopic = ConferenceTracksTopic::latest()->get();
        return response()->json($conferenceTracksTopic);    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'content' => 'required|string',
        ]);

        $conferenceTracksTopic = ConferenceTracksTopic::create($validated);

        return response()->json($conferenceTracksTopic, 201);    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $conferenceTracksTopic = ConferenceTracksTopic::findOrFail($id);
        return response()->json($conferenceTracksTopic);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ConferenceTracksTopic $conferenceTracksTopic)
    {
        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            'content' => 'required|string',
        ]);

        $conferenceTracksTopic->update($validated);

        return response()->json($conferenceTracksTopic);    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ConferenceTracksTopic $conferenceTracksTopic)
    {
        $conferenceTracksTopic->delete();

        return response()->json(null, 204);    }
}