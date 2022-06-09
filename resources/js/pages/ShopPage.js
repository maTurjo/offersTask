import React, { useEffect, useState } from "react";
import ShopListItem from "../components/ShopListItem";
import Header from "../components/Header";
const ShopPage = () => {
    const [ShopCollection, setShopCollection] = useState([]);

    useEffect(() => {
        var requestOptions = {
            method: "GET",

            redirect: "follow",
        };

        fetch(`${window.location.origin}/api/shops`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setShopCollection(() => {
                    return result;
                });
            })
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <div>
            <Header />
            <div className="container">
                <ul className="list-group">
                    {ShopCollection.map((item) => {
                        return (
                            <li key={item.id.toString()} className="list-group-item-action">
                                <div>
                                    <ShopListItem  shopObject={item} />
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ShopPage;
