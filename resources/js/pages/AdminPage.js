import React, { useState,useEffect } from 'react'
import LoginBox from '../components/LoginBox';
import ShopPage from './ShopPage';
import Header from '../components/Header';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';


const AdminPage = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        if(Cookies.get('ot_credentials')){
            setisLoggedIn(true);
        }

    }, []);
  return (

    <div>
        {!isLoggedIn? <LoginBox/>:<ShopPage/>}
    </div>
  )
}

export default AdminPage
