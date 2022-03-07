import React from "react";
import { Link, Route } from "react-router-dom";

const UserPrivateRoute = () => {

    return (

        <Route path="/employees" element={<EmployeeList />} />
    );
};

export default UserPrivateRoute;
