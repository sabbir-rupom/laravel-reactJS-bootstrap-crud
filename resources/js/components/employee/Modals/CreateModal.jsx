import axios from "axios";
import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class CreateModal extends Component {
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

    createEmployee = () => {
        axios
            .post("/api/create/employee", {
                name: this.state.employeeName,
                salary: this.state.employeeSalary,
            })
            .then(() => {
                toast.success("Employee created successfully!", {
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
    }

    render() {
        return (
            <div id="createModal" className="modal fade" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Employee Add</h5>
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
                                onClick={this.createEmployee}
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateModal;
