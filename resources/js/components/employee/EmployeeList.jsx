// import axios from "axios";
import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import TableRow from "./TableRow";
import { ToastContainer, toast } from "react-toastify";
import Pagination from "react-js-pagination";
import CreateModal from "./Modals/CreateModal";
import axios from "axios";
import Header from "../layouts/Header";

class EmployeeList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            pagination: [],
            loadingL: false,
        };
    }

    // Life cycle method
    async componentWillMount() {
        // Get employee list
        await this.getEmployees();
    }

    async getEmployees(pageNumber = 1) {
        let self = this;
        self.setState({ loading: true });
        const response = await axios.get(
            "api/employee/list?page=" + pageNumber
        );
        self.setState({
            employees: response.data.data,
            pagination: {
                current_page: response.data.current_page,
                per_page: response.data.per_page,
                total: response.data.total,
            },
        });
        self.setState({ loading: false });
    }

    render() {
        return (
            <div>
                <Header />
                <ToastContainer />
                <CreateModal />
                <div className="container p-5">
                    <Button
                        className="mb-3"
                        tag="button"
                        color="success"
                        data-bs-toggle="modal"
                        data-bs-target="#createModal"
                    >
                        Create Employee
                    </Button>
                    <Table hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Employee Name</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map(function (x, i) {
                                return <TableRow key={i} data={x} />;
                            })}
                        </tbody>
                    </Table>

                    <div className="mt-3 d-flex justify-content-center">
                        <Pagination
                            totalItemsCount={this.state.pagination.total}
                            activePage={this.state.pagination.current_page}
                            itemsCountPerPage={this.state.pagination.per_page}
                            onChange={(pageNumber) =>
                                this.getEmployees(pageNumber)
                            }
                            itemClass="page-item"
                            linkClass="page-link"
                            firstPageText="First"
                            lastPageText="Last"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeList;
