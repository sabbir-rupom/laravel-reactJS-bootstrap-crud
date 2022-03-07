import React from "react";
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./home/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import EmployeeList from "./employee/EmployeeList";

axios.defaults.headers.post['Content-Type'] = "application.json";
axios.defaults.headers.post['Accept'] = "application.json";
axios.defaults.withCredentials = true;

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/employee" element={<EmployeeList />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </div>
    );
}
export default App;
