import './Cart.css'
import React, { useState } from 'react';
import Swal from "sweetalert2";

const Cart = (props) => {
    const [brake, setBrake] = useState(0)

    const { cart } = props;
    console.log(cart)
    let total = 0;
    for (const product of cart) {
        total = total + parseInt(product.time);
    }
    const brakeArr = [20, 30, 40, 50]
    const handleBrakeTime = (brake) => {
        setBrake(brake)
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
                {
                    brakeArr.map(b => <button onClick={() => handleBrakeTime(b)}>{b}min</button>)
                }


            </div>
            <div className='activity'>
                <h4>Selected:{cart.length}</h4>
                <h2>Learning Details</h2>
                <h5>Activity Time: {total} min </h5>
                <h5>Brake Time: {brake}</h5>

            </div>
            <button onClick={() => {
                Swal.fire({ position: 'center', icon: 'success', title: 'Succrssfully done your task', showConfirmButton: false, timer: 1500 })
            }} className='activity-completed'>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};

export default Cart;