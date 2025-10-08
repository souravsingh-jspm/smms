<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    // return Inertia::render('welcome');
})->name('home-page');    
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    
        Route::get('/', function () {
        return Inertia::render('Home');
    })->name('/'); 
    
        Route::get('about-us', function () {
        return Inertia::render('AboutUs');
    })->name('about-us');
        Route::get('call-for-papers', function () {
        return Inertia::render('CallForPapers');
    })->name('call-for-papers');
        Route::get('contact-us', function () {
        return Inertia::render('ContactUs');
    })->name('contact-us');
        Route::get('paper-overview', function () {
        return Inertia::render('PaperOverview');
    })->name('paper-overview');
        Route::get('pune-darshan', function () {
        return Inertia::render('PuneDarshan');
    })->name('pune-darshan');
        Route::get('committee', function () {
        return Inertia::render('Committees');
    })->name('committee');
        Route::get('layout', function () {
        return Inertia::render('Layout');
    })->name('layout');

    
Route::middleware(['auth', 'verified'])->group(function () {
     Route::get('/admin/home-page', function () {
        return Inertia::render('AdminHomePage');
    })->name('admin-home');

        Route::get('admin/slider', function () {
        return Inertia::render('AdminSlider');
    })->name('slider');

        Route::get('/admin/call-for-page', function () {
        return Inertia::render('AdminCallForPage');
    })->name('acall-for-page');
        Route::get('admin/committee', function () {
        return Inertia::render('AdminCommittee');
    })->name('admin-committee');
    Route::get('admin/paper-overview', function () {
        return Inertia::render('AdminConferenceTracksTopic');
    })->name('admin-paper-overview');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';