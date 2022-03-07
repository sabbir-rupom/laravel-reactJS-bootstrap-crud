import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import Header from "../layouts/Header";

const Register = () => {
    const navigate = useNavigate();

    const [registerInput, setRegister] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();

        setRegister({ ...registerInput, [e.target.name]: e.target.value });
    };

    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
            password_confirmation: registerInput.password_confirmation,
        };

        axios.get("/sanctum/csrf-cookie").then((response) => {
            axios.post(`/api/register`, data).then((res) => {
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

                    navigate('/');
                } else {
                    setRegister({
                        ...registerInput,
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
                                <h4>Create An Account</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={registerSubmit}>
                                    <div className="form-group mb-3">
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={registerInput.name}
                                            onChange={handleInput}
                                            className="form-control"
                                        />
                                        <span className="text-danger">
                                            {registerInput.error_list.name}
                                        </span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email ID</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={registerInput.email}
                                            onChange={handleInput}
                                            className="form-control"
                                        />
                                        <span className="text-danger">
                                            {registerInput.error_list.email}
                                        </span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={registerInput.password}
                                            onChange={handleInput}
                                            className="form-control"
                                        />
                                        <span className="text-danger">
                                            {registerInput.error_list.password}
                                        </span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Confirm Password</label>
                                        <input
                                            type="password"
                                            name="password_confirmation"
                                            value={
                                                registerInput.password_confirmation
                                            }
                                            onChange={handleInput}
                                            className="form-control"
                                        />
                                        <span className="text-danger">
                                            {
                                                registerInput.error_list
                                                    .password_confirmation
                                            }
                                        </span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Register
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

export default Register;
