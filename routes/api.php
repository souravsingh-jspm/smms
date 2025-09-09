<?php
use App\Http\Controllers\HpchController;
use App\Http\Controllers\HpacController;
use App\Http\Controllers\HpidController;
use App\Http\Controllers\CfpidController;
use App\Http\Controllers\CfsgController;
use App\Http\Controllers\CftoiController;
use Illuminate\Support\Facades\Route;

Route::apiResource('conferencehigh-lights', HpchController::class);

Route::apiResource('about-conference', HpacController::class);

Route::apiResource('important-dates', HpidController::class);


Route::apiResource('cf-important-dates', CfpidController::class);

Route::apiResource('cf-submission-guidelines', CfsgController::class);

Route::apiResource('cf-topicof-interest', CftoiController::class);