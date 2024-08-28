import React from 'react'
import './Offer.css'
import exclucive_image from '../Assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='Offers'>
       <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
       </div>
       <div className="offer-right">
        <img src={exclucive_image}/>
       </div>
    </div>
  )
}

export default Offer
