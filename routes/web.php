<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

// This is a hard route that will display an app on the main admin wrapper
Route::get('/admin/forms-basic-inputs', 'AdminController@basicInputsHardRoute');
// This is the default admin "app"
Route::get('/admin/{path?}', 'AdminController@admin');

Route::get('/points/allPoints', 'PointController@allPoints');
Route::get('/points/getById/{id}', 'PointController@getPointsById');



// This is an example of component rendering
Route::get('/{path?}', 'ExampleController@test');

Route::post('/point/save', 'PointController@save');
Route::post('/firm/save', 'firmController@save');
Route::get('/firm/all', 'FirmConroller@get');



