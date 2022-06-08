import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import AdminPage from "./AdminPage";
import ShopPage from "./ShopPage";
import SingleShopPage from "./SingleShopPage";

const Homepage = () => {
    return (
        <div>
          <React.StrictMode>

              <Header/>
            <Routes>
                <Route path="/" element={<ShopPage/>} exact />
                <Route path="/admin" element={<AdminPage/>} exact />
                <Route path="/:id" element={<SingleShopPage/>} exact />
            </Routes>
            {/* <ShopPage></ShopPage> */}
          </React.StrictMode>
        </div>
    );
};

export default Homepage;

if (document.getElementById("root")) {
    ReactDOM.render(
        <BrowserRouter>
            <Homepage />
        </BrowserRouter>,
        document.getElementById("root")
    );
}
