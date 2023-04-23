<?php

namespace App\Http\Controllers;

use App\Models\Point;
use Illuminate\Http\Request;

class PointController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function admin()
    {
        return view('admin.admin');
    }

    public function allPoints()
    {
        return Point::all();
    }

    public function save(Request $request)
    {
        $point = new Point();
        $point->id = null;
        $point->description = $request->description;
        $point->sub_category_id = $request->sub_category_id;
        $point->title = $request->title;
        $point->save();
        return response()->json([
            "status" => 1,
            "id" => $point->id
        ]);
    }
    public function getPointsById($id){
        return Point::where(["sub_category_id"=>$id])->get();
    }
}
