<?php
use App\Http\Controllers\HpchController;
use App\Http\Controllers\HpacController;
use App\Http\Controllers\HpidController;
use Illuminate\Support\Facades\Route;

Route::apiResource('conferencehigh-lights', HpchController::class);

Route::apiResource('about-conference', HpacController::class);

Route::apiResource('important-dates', HpidController::class);