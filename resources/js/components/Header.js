import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {

    const [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(() => {
        // console.log("Use Effect is run");
        if (Cookies.get("ot_credentials")) {
            setisLoggedIn(true);
        }
    }, [isLoggedIn]);


    const handleLogout = () => {
        var myHeaders = new Headers();
        myHeaders.append(
            "Authorization",
            `Bearer ${JSON.parse(Cookies.get("ot_credentials")).token}`
        );
        myHeaders.append("Accept", "application/json");
        myHeaders.append("X-CSRF-TOKEN", csrf_token);

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow",
        };
        
        fetch(`${window.location.origin}/api/logout`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                Cookies.remove("ot_credentials");
                setisLoggedIn(() => false);
                console.log(result);
            })
            .catch((error) => {
                console.log("error", error);
                Cookies.remove("ot_credentials");
                setisLoggedIn(() => false);
            });
    };

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid justify-content-center">
                    {!isLoggedIn ? (
                        <Link to="/admin" className="navbar-brand mb-0 h1">
                            Admin
                        </Link>
                    ) : (
                        ""
                    )}

                    <Link to="/" className="navbar-brand mb-0 h1">
                        Shop
                    </Link>
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="navbar-brand mb-0 h1 btn"
                        >
                            Logout
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Header;
