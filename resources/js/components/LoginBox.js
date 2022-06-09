import React, { useState,useEffect } from "react";
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";
import Header from "./Header";



const LoginBox = () => {
    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
    const [errorMessage, seterrorMessage] = useState("");

    const [isLoggedIn, setisLoggedIn] = useState(false);
    const navigate = useNavigate();



    useEffect(() => {
        if(Cookies.get('ot_credentials')){
            setisLoggedIn(true);
        }
        if (isLoggedIn) {
            navigate("/",{replace: true});
        }
    }, [isLoggedIn]);

    const handleSubmit = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Accept", "application/json");
        myHeaders.append("X-CSRF-TOKEN", csrf_token);

        var urlencoded = new URLSearchParams();
        urlencoded.append("email", userName);
        urlencoded.append("password", password);

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: urlencoded,
            redirect: "follow",
        };

        fetch("http://localhost:3000/api/login", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                if(result.token){
                    Cookies.set("ot_credentials",JSON.stringify(result));
                    setisLoggedIn(()=>true);
                    console.log(JSON.parse(Cookies.get('ot_credentials')) );
                }else{
                    seterrorMessage(result.message);
                }
                // console.log(result)
            }
                )
            .catch((error) => console.log("error", error));

        console.log("Submit Should Be Handled Here");
    };

    return (
        <div>

        <Header/>

        <div id="login">
            <div className="container">
                <div
                    id="login-row"
                    className="row justify-content-center align-items-center"
                >
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="username" className="text-info">
                                    Username:
                                </label>
                                <br />
                                <input
                                    onChange={(event) =>
                                        setuserName(event.target.value)
                                    }
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="text-info">
                                    Password:
                                </label>
                                <br />
                                <input
                                    onChange={(event) =>
                                        setpassword(event.target.value)
                                    }
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                    <div className="error text-danger">{errorMessage}</div>
                                <input
                                    onClick={handleSubmit}
                                    type="submit"
                                    name="submit"
                                    className="btn btn-info btn-md mt-3"
                                    value="submit"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LoginBox;
