<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
   use HasRoles;
class Student extends Model
{
    
    protected $fillable = ['name', 'email', 'grade', 'group', 'status'];
}
