<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clothe extends Model
{   
    // protected $fillable = ['image', 'title', 'description', 'price', 'brand', 'info', 'sizes', 'created_at', 'updated_at', 'category_id']
    public function category() {
        return $this->belongsTo('App\Models\Category');
    }
    use HasFactory;
}
