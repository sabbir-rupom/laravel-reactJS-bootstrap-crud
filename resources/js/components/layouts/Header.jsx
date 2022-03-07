import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
    const navigate = useNavigate();

    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.get("/sanctum/csrf-cookie").then((response) => {
            axios.post(`/api/logout`).then((res) => {
                if (res.data.status === 200) {
                    localStorage.removeItem("auth_token");
                    localStorage.removeItem("auth_name");
                    toast.success(res.data.message, {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        progress: undefined,
                    });

                    navigate("/login");
                } else {
                    toast.error('Error processing logout', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        progress: undefined,
                    });
                }
            });
        });
    };

    var authButtons = "";
    if (!localStorage.getItem("auth_token")) {
        authButtons = (
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/login">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">
                        Registration
                    </Link>
                </li>
            </ul>
        );
    } else {
        authButtons = (
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/employees">
                        Employee List
                    </Link>
                </li>
                <li className="nav-item">
                    <button
                        type="button"
                        className="nav-link btn btn-danger btn-sm"
                        onClick={logoutSubmit}
                    >
                        Logout
                    </button>
                </li>
            </ul>
        );
    }

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Navbar
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {authButtons}
                </div>
            </div>
        </nav>
    );
};

export default Header;
