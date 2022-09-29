import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <p>question: props vs state</p>

            <p>1. props are read only</p>
            <p>state changes can be asynchronous</p>
            <p>2. props can not be modified</p>
            <p>state can be modified using this.setstate</p>
            <p>3. props are used to pass data from one component to another </p>
            <p>state is a local data storage that is local to the component only and can not be passed to other components</p>
            <p>4. props are immutable</p>
            <p>state is mutable</p>
            <p>5. props make component reusable</p>
            <p>state can not make components reusable</p>
        </div>
    );
};

export default Question;