import React from 'react';
import './question3.css'

const Question3 = () => {
    return (
        <div className='question3'>

            <p>Q:What are the uses of useEffect other then data load</p>
            <p>1.Running on state change: validating input field</p>
            <p>2.Running on state change: live filtering</p>
            <p>3.Running on state change: trigger animation on new array value</p>
            <p>4.Running on props change: update paragraph list on fetched API data update</p>
            <p>5.Running on props change: updating fetched API data to get BTC updated price</p>
        </div>
    );
};

export default Question3;