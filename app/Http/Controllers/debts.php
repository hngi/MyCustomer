<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\debt;
class debts extends Controller
{
    //
    function list()
    {
        return debt::All();
    }
//

}
