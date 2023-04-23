<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Point extends Model
{
    use HasFactory;
    protected $table = "points";

//    public int $id;
//    public int $sub_category_id;
//    public string $title;
//    public string $description;
//    protected $guarded = [];
    public $timestamps=false;
}
