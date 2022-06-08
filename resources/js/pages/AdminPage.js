import React, { useState } from 'react'
import LoginBox from '../components/LoginBox';
import ShopPage from './ShopPage';

const AdminPage = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false);
  return (

    <div>
        {!isLoggedIn? <LoginBox/>:<ShopPage/>}
    </div>
  )
}

export default AdminPage