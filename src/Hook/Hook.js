import React, { useState } from 'react';


export default function Hook() {
    const[count, setCount] = useState(0);
    return (
        <>
        <div>
            {count}
        </div>
        <button onClick={()=> setCount(count+1)}>Click Meeee!!!</button>
        </>
    );
}