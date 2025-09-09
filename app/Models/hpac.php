<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class hpac extends Model
{
    use HasFactory;

    // Define the fillable fields
    protected $fillable = [
        'conference_detail',
        'conference_heading',
        'conference_venue',
    ];

}