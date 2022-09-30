import React from 'react';
import './Product.css'



const Product = (props) => {
    // const { handleAddToCart } = props;
    const { name, img, time, description } = props.product;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='cartInfo'>
                <h2> {name}</h2>
                <p><small>{description}</small></p>

                <h2> {time} min</h2>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btnCart'>
                <p>Added</p>
            </button>
        </div>
    );
};

export default Product;