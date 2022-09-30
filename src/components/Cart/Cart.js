import './Cart.css'
import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)
    let total = 0;
    for (const product of cart) {
        total = total + product.time;
    }
    return (
        <div className=''>
            <div className='my-info'>
                <img src="https://cdn5.vectorstock.com/i/thumb-large/45/59/profile-photo-placeholder-icon-design-in-gray-vector-37114559.jpg" alt="" />
                <p>Tamanna Rahman</p>
                <p>Dhaka,Bangladesh</p>
            </div>

            <div className='brake'>
                <h2>Add a Brake</h2>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>

            </div>
            <div className='activity'>
                <h2>Working Time</h2>
                <h3>Activity Time: {total} min </h3>
                <h3>Brake Time: 0</h3>

            </div>
        </div>
    );
};

export default Cart;