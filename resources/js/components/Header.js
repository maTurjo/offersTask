import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid justify-content-center">
                    <Link to="admin" className="navbar-brand mb-0 h1">Admin</Link>
                    <Link to="/" className="navbar-brand mb-0 h1">Shop</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
