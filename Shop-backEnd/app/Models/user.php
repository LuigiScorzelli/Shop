<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user extends Model
{
    protected $fillable = ['name', 'lastname', 'email', 'phone', 'password', 'passwordConfirm', 'address', 'address2', 'city', 'state', 'created_at', 'updated_at'];
    use HasFactory;
}
