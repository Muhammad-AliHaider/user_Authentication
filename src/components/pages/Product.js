import product_card from '../Product_data'
import React from 'react'

const MainContent= () => {
    console.log(product_card);
    const listItems = product_card.map((item)=>
       <div className='card' key={item.id}>
            <div className='card_img' >
                <img src={item.thumb} />
            </div>
            <div className='card_header'>
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className='price'>{item.price}<span>{item.currency}</span></p>
                <div className='btf'>Add to cart</div>
            </div>
       </div>
    )
       
    return(
        <div className='main_content'>
                {listItems}
        </div>
       
    )
}
export default MainContent;
