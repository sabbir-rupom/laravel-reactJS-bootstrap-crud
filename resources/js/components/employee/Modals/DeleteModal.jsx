import axios from "axios";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class DeleteModal extends Component {
    constructor(props) {
        super(props);
    }

    deleteEmployee = (id) => {
        axios
            .delete("/delete/employee/" + id)
            .then(() => {
                toast.error("Employee deleted successfully!");

                setTimeout(() => {
                    location.reload();
                }, 1500);
            });
    };

    render() {
        return (
            <div
                id={"deleteModal" + this.props.modalId}
                className="modal fade"
                tabIndex="-1"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Employee Details</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            Are you sure to delete employee "
                            {this.props.employeeData.currentEmployeeName}" ?
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
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    this.deleteEmployee(this.props.modalId);
                                }}
                            >
                                Yes, Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeleteModal;
