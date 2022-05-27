import React from "react";
import { useSelector } from "react-redux";
import  {BrowserRouter, a, Link, NavLink } from "react-router-dom";
const Navbar = () => {
    const state = useSelector((state)=> state.handlerCart);
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-light bg-white py-3 shadow-sm">
                <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        Abdo Shop
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Contact</NavLink>
                            </li>
                            
                        </ul>
                        <div className="buttons">
                            <NavLink to="/" className="btn btn-outline-dark me-1">
                                <i className="fa fa-sign-in "></i> Login
                            </NavLink>
                            <NavLink to="/" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus "></i> Register
                            </NavLink>
                            <NavLink to="/" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart "></i> Cart ({state.lenght})
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar ;