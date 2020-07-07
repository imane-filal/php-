<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Demande extends Model
{
    protected $fillable = array( 'teste', 'isolement','maladie','symptome','temps');
}
