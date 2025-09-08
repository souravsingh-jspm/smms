<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class hpch extends Model
{
        use HasFactory;

    // Define the fillable fields
    protected $fillable = [
        'icon',
        'date',
        'description',
    ];
}