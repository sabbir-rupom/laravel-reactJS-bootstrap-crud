<?php

use App\Http\Controllers\EmployeeController;
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

Route::get('/', function () {
    return view('home');
});

Route::get('/get/employee/list', [EmployeeController::class, 'index'])->name('employee.list');

Route::post('/get/employee/detail', [EmployeeController::class, 'detail'])->name('employee.detail');

Route::post('/create/employee', [EmployeeController::class, 'store'])->name('employee.create');

Route::put('/update/employee/data', [EmployeeController::class, 'update'])->name('employee.update');

Route::delete('/delete/employee/{employee}', [EmployeeController::class, 'delete'])->name('employee.delete');
