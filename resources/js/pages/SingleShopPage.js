import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleShopPage = () => {

    let{id}=useParams();

    const [isLoggedIn, setisLoggedIn] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/admin");
        }
    }, []);

    return <div>SingleShopPage for {id}</div>;
};

export default SingleShopPage;
