<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('registo');
});


Route::get('/login', function () {
    return view('login');
});

Route::get('/registo', function () {
    return view('registo');
});