import React, { useEffect, useState } from "react";
import ShopListItem from "../components/ShopListItem";
const ShopPage = () => {
    const [ShopCollection, setShopCollection] = useState([]);

    useEffect(() => {
        setShopCollection(() => {
            return [
                {
                    id:1,
                    partnerName: "Sephora",
                    location: { latitude: "", logitude: "" },
                    offerPercentage: 10,
                    imageUrl: "https://source.unsplash.com/100x100",
                },
                {
                    id:2,
                    partnerName: "M&M",
                    location: { latitude: "", logitude: "" },
                    offerPercentage: 10,
                    imageUrl: "https://picsum.photos/100/100",
                },
                {

                    id:3,
                    partnerName: "Bullet",
                    location: { latitude: "", logitude: "" },
                    offerPercentage: 10,
                    imageUrl: "https://picsum.photos/100/100",
                },
            ];
        });
    }, []);

    return (
        <div className="container">
            <ul className="list-group">
                {ShopCollection.map((item) => {
                    return (
                            <li className="list-group-item-action">
                        <div>
                                {/* <li>{item.partnerName}</li> */}
                                <ShopListItem  shopObject={item} />
                        </div>
                            </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ShopPage;
