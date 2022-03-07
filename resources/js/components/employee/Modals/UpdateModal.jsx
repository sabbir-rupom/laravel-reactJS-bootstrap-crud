import axios from "axios";
import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class UpdateModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employeeName: null,
            employeeSalary: null,
        };
    }

    inputEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value,
        });
    };

    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value,
        });
    };

    static getDerivedStateFromProps(props, current_state) {
        let employeeUpdate = {
            employeeName: null,
            employeeSalary: null,
        };

        // Updating data from input
        if (
            current_state.employeeName &&
            current_state.employeeName !==
                props.employeeData.currentEmployeeName
        ) {
            return null;
        }

        if (
            current_state.employeeSalary &&
            current_state.employeeSalary !==
                props.employeeData.currentEmployeeSalary
        ) {
            return null;
        }

        // Updating data from props below

        if (
            current_state.employeeName !==
                props.employeeData.currentEmployeeName ||
            current_state.employeeName ===
                props.employeeData.currentEmployeeName
        ) {
            employeeUpdate.employeeName =
                props.employeeData.currentEmployeeName;
        }
        if (
            current_state.employeeSalary !==
                props.employeeData.currentEmployeeSalary ||
            current_state.employeeSalary ===
                props.employeeData.currentEmployeeSalary
        ) {
            employeeUpdate.employeeSalary =
                props.employeeData.currentEmployeeSalary;
        }

        return employeeUpdate;
    }

    // Update ajax employee data
    updateEmployeeData = () => {
        axios
            .put("/api/employee/update", {
                employeeId: this.props.modalId,
                employeeName: this.state.employeeName,
                employeeSalary: this.state.employeeSalary,
            })
            .then((response) => {
                toast.success("Employee update successfully!", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                setTimeout(() => {
                    location.reload();
                }, 1500);
            });
    };

    render() {
        return (
            <div
                id={"updateModal" + this.props.modalId}
                className="modal fade"
                tabIndex="-1"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Employee Edit</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <Form className="form">
                                <FormGroup>
                                    <Label for="employeeName">
                                        Employee Name
                                    </Label>
                                    <Input
                                        id="employeeName"
                                        name="employee_name"
                                        placeholder="Enter Employee Name"
                                        type="text"
                                        value={this.state.employeeName ?? ""}
                                        onChange={this.inputEmployeeName}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="employeeSalary">
                                        Employee Salary
                                    </Label>
                                    <Input
                                        id="employeeSalary"
                                        name="salary"
                                        placeholder="Enter salary"
                                        type="number"
                                        value={this.state.employeeSalary ?? ""}
                                        onChange={this.inputEmployeeSalary}
                                    />
                                </FormGroup>
                            </Form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="submit"
                                className="btn btn-success"
                                onClick={this.updateEmployeeData}
                            >
                                Save Information
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateModal;
