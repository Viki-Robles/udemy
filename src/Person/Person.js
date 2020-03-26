import React from 'react';

export default function Person (props) {
    return(
        <>
        <div onClick={props.click}>My name is {props.name} and I am {props.age} old.</div>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed}></input>
        </>
    );
}

