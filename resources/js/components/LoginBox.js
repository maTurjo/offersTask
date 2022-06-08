import React, { useState } from "react";

const LoginBox = () => {
    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit=()=>{
        console.log(userName);
        console.log(password);
        console.log("Submit Should Be Handled Here");
    }
    return (
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
                                    onChange={(event)=>setuserName(event.target.value)}
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
                                    onChange={(event)=>setpassword(event.target.value)}
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="remember-me" className="text-info">
                                        <span>Remember me</span> 
                                        <span>
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                            />
                                        </span>
                                    </label>
                                    <br />
                                    <input
                                    onClick={handleSubmit}
                                        type="submit"
                                        name="submit"
                                        className="btn btn-info btn-md"
                                        value="submit"
                                    />
                                </div>
                                <div id="register-link" className="text-right">
                                    <a href="#" className="text-info">
                                        Register here
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginBox;
