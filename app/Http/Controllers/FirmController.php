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
        $firm->name = $request->contractor['name'];
        $firm->inn = $request->contractor['inn'];
        $firm->email = $request->contractor['phone'];
        $firm->phone = $request->contractor['phone'];
        $firm->save();
        return response()->json([
            "status" => 1,
            "id" => $firm->id
        ]);
    }
    public function getAll(){
        return Firm::all();
    }

}
