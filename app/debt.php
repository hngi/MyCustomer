<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class debt extends Model
{
    //{
    //Set mass-assignable fields
    protected $fillable = ['name', 'phone number', 'amount', 'product','payment_date','date'];

    public function getRouteKeyName()
        {
            return 'slug';
        }
}
