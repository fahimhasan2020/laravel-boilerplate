<?php

namespace App\Http\Controllers\Admin;

use App\Model\Permission;
use App\Model\Role;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;

class AdminRegisterController extends Controller
{
    public function getPermissions(){
        return response(Permission::all()->jsonSerialize(), Response::HTTP_OK);
    }
    public function getRoles(){
        return response(Role::all()->jsonSerialize(), Response::HTTP_OK);
    }
}
