import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ShopListItem from "../components/ShopListItem";
const ShopPage = () => {
    const [ShopCollection, setShopCollection] = useState([]);

    useEffect(() => {
        setShopCollection(() => {
            return [
                {
                    partnerName: "Sephora",
                    location: { latitude: "", logitude: "" },
                    offerPercentage: 10,
                    imageUrl: "https://picsum.photos/100/100",
                },
                {
                    partnerName: "M&M",
                    location: { latitude: "", logitude: "" },
                    offerPercentage: 10,
                    imageUrl: "https://picsum.photos/100/100",
                },
                {
                    partnerName: "Bullet",
                    location: { latitude: "", logitude: "" },
                    offerPercentage: 10,
                    imageUrl: "https://picsum.photos/100/100",
                },
            ];
        });
    }, []);

    return (
        <div>
            <Header></Header>
            <ul>
                {ShopCollection.map((item) => {
                    return (
                        <div>
                            <li>
                                {/* <li>{item.partnerName}</li> */}
                                <ShopListItem shopObject={item} />
                            </li>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

export default ShopPage;
