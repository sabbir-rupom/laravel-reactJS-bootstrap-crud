<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmployeeController;
use Illuminate\Support\Facades\Route;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('employee/list', [EmployeeController::class, 'index'])->name('employee.list');

    Route::post('employee/detail', [EmployeeController::class, 'detail'])->name('employee.detail');

    Route::post('employee/create', [EmployeeController::class, 'store'])->name('employee.create');

    Route::put('employee/update', [EmployeeController::class, 'update'])->name('employee.update');

    Route::delete('employee/delete/{employee}', [EmployeeController::class, 'delete'])->name('employee.delete');

    Route::post('logout', [AuthController::class, 'logout']);;
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

