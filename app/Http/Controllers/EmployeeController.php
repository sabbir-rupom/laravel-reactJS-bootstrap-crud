<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Employee::orderBy('id', 'ASC')->paginate(10);

        return response()->json($employees);
    }

    public function detail(Request $request)
    {
        $employees = Employee::findOrFail($request->employeeId);
        return response()->json($employees);
    }

    public function store(Request $request)
    {
        $employee = Employee::create([
            'employee_name' => $request->name,
            'salary' => $request->salary,
        ]);
        return response()->json($employee);
    }

    public function delete(Employee $employee)
    {
        $employee->delete();
        return response()->json([
            'success' => true
        ]);
    }

    public function update(Request $request)
    {
        $employee = Employee::where('id', $request->employeeId)->first();
        if($employee) {
            $employee->employee_name = trim($request->employeeName);
            $employee->salary = intval($request->employeeSalary);
            $employee->save();
        }
        return response()->json([
            'employee_name' => $employee->employee_name,
            'salary' => $employee->salary,
        ]);
    }
}
