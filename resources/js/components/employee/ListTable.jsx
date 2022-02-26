// import axios from "axios";
import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import TableRow from "./TableRow";
import { ToastContainer, toast } from "react-toastify";
import CreateModal from "./Modals/CreateModal";

class ListTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        }
    }

    // Life cycle method
    componentDidMount() {
        this.getEmployeeList();
    }

    // Get employee list
    getEmployeeList = () => {
        let self = this;
        axios.get('get/employee/list').then(function(response){
            self.setState({
                employees: response.data
            })
        });
    }

    render() {
        return (
            <div>
                <ToastContainer />
                <CreateModal />
                <Button
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
                        {
                            this.state.employees.map(function(x, i) {
                                return  <TableRow key={i} data={x} />
                            })
                        }

                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ListTable;
