<?php


namespace App\Http\Controllers;

use App\Models\Firm;
use Illuminate\Http\Request;

class FirmController extends Controller
{
    public function get(){
        return Firm::all();
    }
    public function save(Request $request)
    {
        $firm = new Firm();
        $firm->id = null;
        $firm->name = $request->name;
        $firm->inn = $request->inn;
        $firm->email = $request->phone;
        $firm->save();
        return response()->json([
            "status" => 1,
            "id" => $firm->id
        ]);
    }

}
