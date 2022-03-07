<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;

Route::post('register', [AuthController::class, 'register']);;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/get/employee/list', [EmployeeController::class, 'index'])->name('employee.list');

Route::post('/get/employee/detail', [EmployeeController::class, 'detail'])->name('employee.detail');

Route::post('/create/employee', [EmployeeController::class, 'store'])->name('employee.create');

Route::put('/update/employee/data', [EmployeeController::class, 'update'])->name('employee.update');

Route::delete('/delete/employee/{employee}', [EmployeeController::class, 'delete'])->name('employee.delete');
