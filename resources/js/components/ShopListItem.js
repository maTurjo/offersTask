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

    <div className='row my-2'>
        <div className='col-md-3 text-center align-self-center'>{shopObject.partnerName}</div>
        <div className='col-md-2 text-center align-self-center'>{shopObject.location.latitude}</div>
        <div className='col-md-2 text-center align-self-center'>{shopObject.location.longitude}</div>
        <div className='col-md-3 text-center align-self-center'>{shopObject.offerPercentage}</div>
        {/* <div>{shopObject.imageUrl}</div> */}
        <img className='img col-md-2' src={shopObject.imageUrl}/>

    </div>
    </div>
  )
}

export default ShopListItem
