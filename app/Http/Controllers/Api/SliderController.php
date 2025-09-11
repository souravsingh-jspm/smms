<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class SliderController extends Controller
{

    public function index()
    {
        $sliders = Slider::latest()->get();
        return response()->json([
            'message' => 'Sliders retrieved successfully!',
            'data' => $sliders
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'description' => 'nullable|string',
            'link_url' => 'nullable|url',
            'button_text' => 'nullable|string|max:50',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $imagePath = $request->file('image')->store('sliders', 'public');

        $slider = Slider::create([
            'title' => $request->title,
            'description' => $request->description,
            'image_path' => $imagePath,
            'link_url' => $request->link_url,
            'button_text' => $request->button_text,
        ]);

        return response()->json([
            'message' => 'Slider created successfully!',
            'data' => $slider
        ], 201);
    }

    public function show(Slider $slider)
    {
        return response()->json([
            'message' => 'Slider retrieved successfully!',
            'data' => $slider
        ], 200);
    }

    public function update(Request $request, Slider $slider)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|required|string|max:255',
            'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Image is optional on update
            'description' => 'nullable|string',
            'link_url' => 'nullable|url',
            'button_text' => 'nullable|string|max:50',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $slider->title = $request->input('title', $slider->title);
        $slider->description = $request->input('description', $slider->description);
        $slider->link_url = $request->input('link_url', $slider->link_url);
        $slider->button_text = $request->input('button_text', $slider->button_text);

         if ($request->hasFile('image')) {
            // Delete the old image
            Storage::disk('public')->delete($slider->image_path);
            
             $slider->image_path = $request->file('image')->store('sliders', 'public');
        }

        $slider->save();

        return response()->json([
            'message' => 'Slider updated successfully!',
            'data' => $slider
        ], 200);
    }

 
    public function destroy(Slider $slider)
    {
        Storage::disk('public')->delete($slider->image_path);

        $slider->delete();

        return response()->json([
            'message' => 'Slider deleted successfully!'
        ], 200);
    }
}