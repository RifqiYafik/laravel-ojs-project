<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('homePage');
});
// Route::get('/register', function () {
//     return view('pages.auth.register');
// });
Route::get('/journaluser/login', function () {
    return view('pages.auth.login');
})->name('journaluser.login');
Route::get('/journaluser/register', function () {
    return view('pages.auth.register');
})->name('journaluser.register');

Route::get('/admin/login', function () {
    return view('pages.auth.login1');
})->name('admin.login');

Route::middleware(['auth'])->group(function () {
    Route::get('home', function() {
        return view('pages.dashboard');
    })->name('home');
});
