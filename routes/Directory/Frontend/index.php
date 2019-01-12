<?php
Route::get('/{path}','DirectoryController@index')->where('path', '[\/\w\.]*');