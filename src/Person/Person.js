import React from 'react';
import { randomBytes } from 'crypto';

export default function Person (props) {
//creating an error example
const rnd = Math.random();
if (rnd > 0.9) {
    throw new Error ("Something went wrong");
}

    return(
        <>
        <div onClick={props.click}>My name is {props.name} and I am {props.age} old.</div>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
        </>
    );
}

