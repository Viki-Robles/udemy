import React from 'react';



export default function Cards(props) {
    return (
        <div>
            My favourite fruit is {props.name} and I am {props.age} old.
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
}



























/*export default function Card (props) {
    return (
        <div >
            My favourite fruit is {props.name} and my number is {props.number}.
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
        
    );
}*/