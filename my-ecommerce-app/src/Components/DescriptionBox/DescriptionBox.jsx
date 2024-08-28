import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="discriptionbox-discription">
            <p>
            A product title entices the customer to your product page, a product description gives them information about your product,
             but an image or video allows them to experience your product’s look and feel. With 360 degree views, 3D customization, videos, and so on,
              they get a chance to get into the product’s journey.Though white backdrop images are highly professional and everyone’s favorite,
              <p>
               a storytelling image is my personal favorite. You would have come across it too. Take a look below.This is a deodorant for men. 
               Though they haven’t skipped the regular white backdrop image of the actual product, they’ve used an additional image- 
               stating the benefit of the product-” Destroys Underarm Odor for 24 Hours”
               </p>
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
