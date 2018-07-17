import React from 'react';
import '../assets/css/Square.css';

export default function Square(props) {    
        return(
            <button className="square" onClick={props.onClick}>
                {props.value}
            </button> 
        );
}