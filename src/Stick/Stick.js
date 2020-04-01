import React, { useEffect } from 'react';


const Stick = () => {
    useEffect(()=> {
        console.log("[cards.js] useEffect");
        setTimeout(()=> {
            alert("Pin Me");

        }, 1000)
    });
    return (
        <div>
            <h4>On my world...</h4>
        </div>
    );
}


export default Stick;