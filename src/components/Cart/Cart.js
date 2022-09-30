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
                <div className='personal-detail'>
                    <p>Height:5.2</p>
                    <p>Weight: 50kg</p>
                    <p>Age: 22 years</p>
                </div>
            </div>

            <div className='brake'>
                <h2>Add a Brake</h2>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>

            </div>
            <div className='activity'>
                <h4>Selected:{cart.length}</h4>
                <h2>Learning Details</h2>
                <h5>Activity Time: {total} min </h5>
                <h5>Brake Time: 0</h5>

            </div>
        </div>
    );
};

export default Cart;