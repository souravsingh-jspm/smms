<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class cftoi extends Model
{
        use HasFactory;

    // Define the fillable fields
    protected $fillable = [
        'description',
    ];}