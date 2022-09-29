import React from 'react';
import './Product.css'



const Product = (props) => {
    // const { handleAddToCart } = props;
    const { name, img, time, age } = props.product;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='cartInfo'>
                <h2> {name}</h2>
                <h4>For Age:{age}</h4>
                <h4> {time} s</h4>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btnCart'>
                <p>Added</p>
            </button>
        </div>
    );
};

export default Product;