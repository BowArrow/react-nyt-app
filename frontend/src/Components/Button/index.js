import React from 'react';
import './style.css';

const Button = props => {
        return (
            <input className={`btn btn-${props.color}`} type='submit' name={props.name} value={props.value} />
        )
};

export default Button;