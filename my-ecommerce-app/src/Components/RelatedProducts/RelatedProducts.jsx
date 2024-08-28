import React from 'react'
import './RelatedProdects.css'
import data_prodect from '../Data/data';
import Item from '../Items/Item';
const RelatedProducts = () => {
  return (
    <div className='relatedprodects'>
      <h1>Related Products</h1>
      <hr/>
      <div className="relatedproducts-item">
        {data_prodect.map((item,i)=>{
            return <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
