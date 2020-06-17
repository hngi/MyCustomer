<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\debt;
use carbon;
class daily extends Controller
{
    //
     public function daily(debt $debt)
    {
        //
        
    // Search for a user based on their name.
   
        return $debt->where('date', date('y-m-d'))->get();
    
    }

            
}
