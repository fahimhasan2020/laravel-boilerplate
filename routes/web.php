<?php

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

/*Admins*/
Route::group(['prefix' => 'admin', 'as' => 'admin.','namespace' => 'Admin'], function () {
    include(__DIR__.'/Directory/Admin/index.php');
});
/*endAdmin*/
/*User*/
Route::group(['prefix' => 'user', 'as' => 'user.','namespace' => 'User'], function () {
    include(__DIR__.'/Directory/User/index.php');
});
/*endEndUser*/


/*Frontend*/
Route::group(['namespace' => 'Frontend'], function () {
    include(__DIR__.'/Directory/Frontend/index.php');
});
/*endFrontend*/