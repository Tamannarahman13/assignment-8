import './Body.css'

import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Body = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };
    return (
        <div className='body'>
            <div className="activity">
                <h2>Learning Avtivity</h2>
                <p>today Activities </p>
                <div className='cart'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>

            </div>


            <div className="profile">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Body;