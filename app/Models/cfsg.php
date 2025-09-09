<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class cfsg extends Model
{
        use HasFactory;

    // Define the fillable fields
    protected $fillable = [
        'icon',
        'title',
        'description',
    ];}