<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

// Rota inicial (podes manter ou apagar se não quiseres a página inicial)
Route::get('/', function () {
    return view('welcome');
});

Route::post('/login', [AuthController::class, 'login'])->name('login');
