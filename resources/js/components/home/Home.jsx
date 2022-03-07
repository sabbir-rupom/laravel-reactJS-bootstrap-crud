import React from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";

const Home = () => {
    var employeeListButton = "";
    if (localStorage.getItem("auth_token")) {
        employeeListButton = (
            <div>
                Go to <Link to="/employees">employee list page</Link>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <div className="container p-5">
                <h1>Welcome Home! </h1>
                {employeeListButton}
            </div>
        </div>
    );
};

export default Home;
