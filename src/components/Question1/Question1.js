import React from 'react';
import './Question1.css'

const Question1 = () => {
    return (
        <div className='question1'>
            <p>question: How usestate works</p>
            <p>usestate is a hook that allows you to have state variables in functional components . You pass the initial  state to this function and it returns a variables with the current state value and another function to update this value. you creat a function component and throw some react hook  at it that tracks state,can also update it and it just works</p>
        </div>
    );
};

export default Question1;