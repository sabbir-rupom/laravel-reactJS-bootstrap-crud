import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../layouts/Header";

const Login = () => {
    const navigate = useNavigate();

    const [loginInput, setLogin] = useState({
        email: "",
        password: "",
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();

        setLogin({ ...loginInput, [e.target.name]: e.target.value });
    };

    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        };

        axios.get("/sanctum/csrf-cookie").then((response) => {
            axios.post(`/api/login`, data).then((res) => {
                if (res.data.status === 200) {
                    localStorage.setItem("auth_token", res.data.user.token);
                    localStorage.setItem("auth_name", res.data.user.name);
                    toast.success(res.data.message, {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        progress: undefined,
                    });

                    navigate("/");
                } else if (res.data.status === 401) {
                    toast.error(res.data.message, {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        progress: undefined,
                    });
                } else {
                    setLogin({
                        ...loginInput,
                        error_list: res.data.validation_errors,
                    });
                }
            });
        });
    };

    return (
        <div>
            <Header />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Sign In</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={loginSubmit}>
                                    <div className="form-group mb-3">
                                        <label>Email ID</label>
                                        <input
                                            type="email"
                                            name="email"
                                            onChange={handleInput}
                                            value={loginInput.email}
                                            className="form-control"
                                            required
                                        />
                                        <span className="text-danger">
                                            {loginInput.error_list.email}
                                        </span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            onChange={handleInput}
                                            value={loginInput.password}
                                            className="form-control"
                                            required
                                        />
                                        <span className="text-danger">
                                            {loginInput.error_list.password}
                                        </span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
