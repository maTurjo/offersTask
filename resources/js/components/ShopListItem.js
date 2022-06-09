import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const ShopListItem = ({shopObject}) => {


  let navigate = useNavigate();
  const goToSinglePage=()=>{

    console.log(shopObject);
    let path = `/${shopObject.id}`;
    navigate(path);

  }


    return (
    <div onClick={goToSinglePage} >

    <div className='row my-2 '>
        <button className='col-md-3 text-center align-self-center btn'>{shopObject.name}</button>
        <div className='col-md-2 text-center align-self-center'>{shopObject.latitude}</div>
        <div className='col-md-2 text-center align-self-center'>{shopObject.longitude}</div>
        <div className='col-md-3 text-center align-self-center'>{shopObject.discount} <span className='text-danger'>% off</span></div>
        {/* <div>{shopObject.image}</div> */}
        <img className='img col-md-2' src={shopObject.image}/>

    </div>
    </div>
  )
}

export default ShopListItem
