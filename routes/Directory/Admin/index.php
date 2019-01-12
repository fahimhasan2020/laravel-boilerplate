<?php
Route::group(['namespace' => 'User'], function () {
    Route::resource('permission', 'PermissionController');
    Route::resource('roles', 'RoleController');
    Route::resource('user/adding', 'UserAddController');
    Route::resource('user/disabled/list', 'UserDisabledListController');
    Route::resource('user/listing', 'UserListController');
    Route::resource('user/inactives', 'UserInactiveListController');
    Route::resource('user/trashed/lists', 'UserTrashedListController');
});
Route::post('authentication','AdminLoginController@authenticate');
Route::get('authenticated/user','AdminLoginController@getAuthenticatedUser');
Route::get('get/permissions','AdminRegisterController@getPermissions');
Route::get('get/roles','AdminRegisterController@getRoles');