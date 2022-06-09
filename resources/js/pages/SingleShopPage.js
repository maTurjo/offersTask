import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

const SingleShopPage = () => {
    const [Shop, setShop] = useState({});

    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [name, setname] = useState("");
    const [discount, setdiscount] = useState(0);
    const [latitude, setlatitude] = useState(0);
    const [longitude, setlongitude] = useState(0);
    const [image, setimage] = useState("");
    const [imageFile, setimageFile] = useState();
    const [imageFileSelected, setimageFileSelected] = useState(false);

    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            var myHeaders = new Headers();
            myHeaders.append(
                "Authorization",
                `Bearer ${JSON.parse(Cookies.get("ot_credentials")).token}`
            );

            var requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow",
            };

            fetch(`http://localhost:3000/api/shop/${id}`, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    setShop(result);
                    setname(result.name);
                    setdiscount(result.discount);
                    setlatitude(result.latitude);
                    setlongitude(result.longitude);
                    setimage(result.image);
                    console.log(result);
                })
                .catch((error) => console.log("error", error));
        }
    }, [isLoggedIn]);

    useEffect(() => {
        if (Cookies.get("ot_credentials")) {
            console.log(isLoggedIn);
            console.log(Cookies.get("ot_credentials"));
            setisLoggedIn(true);
        } else {
            navigate("/admin");
        }
    }, []);

    const selectImageFile = (e) => {
        console.log("Image file selected");
        setimageFile(e.target.files[0]);
        setimageFileSelected(true);
    };

    const uploadFile = () => {
        if(imageFileSelected){
            console.log("Sending File");
            var myHdrrs = new Headers();
            // myHdrrs.append("Accept", "application/json");
            myHdrrs.append(
                "Authorization",
            "Bearer 34|KvIa9gMLb3zl3S3V8sYbuB1fsAYHxmeqHWXfKxmt"
            );
            myHdrrs.append("X-CSRF-TOKEN", csrf_token);

        var formdata = new FormData();
        formdata.append(
            "imgupload",
            imageFile
            );

            var requestOptions = {
                method: "POST",
                headers: myHdrrs,
                body: formdata,
                redirect: "follow",
            };

            fetch(`http://localhost:3000/api/shop/${id}`, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
        }
    };

    const handleSaveSubmission = () => {
        uploadFile();
        // var myHeaders = new Headers();
        // myHeaders.append("Accept", "application/json");
        // myHeaders.append(
        //     "Authorization",
        //     `Bearer ${JSON.parse(Cookies.get("ot_credentials")).token}`
        // );
        // myHeaders.append("X-CSRF-TOKEN", csrf_token);

        // // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        // var urlencoded = new URLSearchParams();
        // urlencoded.append("name", name);
        // urlencoded.append("discount", discount);
        // urlencoded.append("latitude", latitude);
        // urlencoded.append("longitude", longitude);
        // urlencoded.append("image", image);

        // var requestOptions = {
        //     method: "PUT",
        //     headers: myHeaders,
        //     body: urlencoded,
        //     redirect: "follow",
        // };

        // fetch(`http://localhost:3000/api/shop/${id}`, requestOptions)
        //     .then((response) => response.text())
        //     .then((result) => {
        //         // navigate("/");
        //         console.log(result);
        //     })
        //     .catch((error) => console.log("error", error));
    };

    return (
        <div>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={(e) => {
                        setname(e.target.value);
                    }}
                    value={name}
                />
            </div>
            <div>
                <label htmlFor="name">Discount</label>
                <input
                    type="number"
                    onChange={(e) => {
                        setdiscount(e.target.value);
                    }}
                    value={discount}
                />
            </div>
            <div>
                <label htmlFor="name">latitude</label>
                <input
                    type="number"
                    onChange={(e) => {
                        setlatitude(e.target.value);
                    }}
                    value={latitude}
                />
            </div>
            <div>
                <label htmlFor="name">longitude</label>
                <input
                    type="number"
                    onChange={(e) => {
                        setlongitude(e.target.value);
                    }}
                    value={longitude}
                />
            </div>
            <div>
                <label htmlFor="name">image</label>
                <input
                    type="url"
                    onChange={(e) => {
                        setimage(e.target.value);
                    }}
                    value={image}
                />
            </div>
            <div>
                <label htmlFor="file" >
                    Change Image
                </label>
                <input type="file" onChange={selectImageFile} />
            </div>
            <button onClick={handleSaveSubmission} className="btn btn-success">
                Save
            </button>
        </div>
    );
};

export default SingleShopPage;
