import React, { Component } from "react";

class ViewModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={ "viewModal" + this.props.modalId } className="modal fade" tabIndex="-1">
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
                            <div className="mb-3">
                                <label>Name</label>:
                                <span className="text-strong"> { this.props.employeeData.currentEmployeeName } </span>
                            </div>
                            <div className="mb-3">
                                <label>Salary</label>:
                                <span className="text-strong"> { this.props.employeeData.currentEmployeeSalary } </span>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            {/* <button type="button" className="btn btn-primary">
                                Save changes
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewModal;
