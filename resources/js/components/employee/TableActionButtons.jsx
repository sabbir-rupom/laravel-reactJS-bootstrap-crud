import axios from "axios";
import React, { Component } from "react";
import { Button } from "reactstrap";
import ViewModal from "./Modals/ViewModal";
import UpdateModal from "./Modals/UpdateModal";
import DeleteModal from "./Modals/DeleteModal";

class TableActionButtons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentEmployeeName: null,
            currentEmployeeSalary: null,
        };
    }

    // Getting Individual employee data
    getEmployeeDetails = (id) => {
        axios
            .post("/api/get/employee/detail", {
                employeeId: id,
            })
            .then((response) => {
                this.setState({
                    currentEmployeeName: response.data.employee_name,
                    currentEmployeeSalary: response.data.salary,
                });
            });
    };

    render() {
        return (
            <div>
                <ViewModal
                    modalId={this.props.eachRowId}
                    employeeData={this.state}
                />
                <UpdateModal
                    modalId={this.props.eachRowId}
                    employeeData={this.state}
                />
                <DeleteModal
                    modalId={this.props.eachRowId}
                    employeeData={this.state}
                />
                <div className="btn-group">
                    <Button
                        tag="button"
                        color="primary"
                        data-bs-toggle="modal"
                        data-bs-target={"#viewModal" + this.props.eachRowId}
                        onClick={() => {
                            this.getEmployeeDetails(this.props.eachRowId);
                        }}
                    >
                        View
                    </Button>

                    <Button
                        tag="button"
                        color="secondary"
                        data-bs-toggle="modal"
                        data-bs-target={"#updateModal" + this.props.eachRowId}
                        onClick={() => {
                            this.getEmployeeDetails(this.props.eachRowId);
                        }}
                    >
                        Edit
                    </Button>

                    <Button
                        tag="button"
                        color="danger"
                        data-bs-toggle="modal"
                        data-bs-target={"#deleteModal" + this.props.eachRowId}
                        onClick={() => {
                            this.getEmployeeDetails(this.props.eachRowId);
                        }}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        );
    }
}

export default TableActionButtons;
