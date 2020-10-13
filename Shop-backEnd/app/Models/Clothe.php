<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clothe extends Model
{   
    public function category() {
        return $this->belongsTo('App\Models\Category');
    }
    use HasFactory;
}
