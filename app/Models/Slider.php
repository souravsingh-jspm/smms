<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Slider extends Model
{
    use HasFactory;


    protected $fillable = [
        'title',
        'description',
        'image_path',
        'link_url',
        'button_text',
    ];}