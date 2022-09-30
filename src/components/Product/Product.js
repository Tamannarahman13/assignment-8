import React from 'react';
import './Product.css'



const Product = (props) => {
    const { product, handleAddToCart } = props;

    const { name, img, time, description } = product;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='cart-info'>
                <h2> {name}</h2>
                <p><small>{description}</small></p>

                <h2> Time:{time} min</h2>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btnCart'>
                <p>Added</p>
            </button>
        </div>
    );
};

export default Product;