import React, { useEffect } from 'react'

const ShopListItem = ({shopObject}) => {



    return (
    <div >

    <div className='row'>
        <div className='col-md-2'>{shopObject.partnerName}</div>
        <div className='col-md-2'>{shopObject.location.latitude}</div>
        <div className='col-md-2'>{shopObject.location.longitude}</div>
        <div className='col-md-2'>{shopObject.offerPercentage}</div>
        {/* <div>{shopObject.imageUrl}</div> */}
        <img className='img col-md-4' src={shopObject.imageUrl}/>

    </div>
    </div>
  )
}

export default ShopListItem
