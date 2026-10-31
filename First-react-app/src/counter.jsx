import { useState, useEffect } from 'react'
export default function Counter() {

    const [count, setCount] = useState(0); 

    useEffect ( () => {
        console.log(`The count is ${count}`);
    });

    return(
        <>
            <h1>You clicked {count} times </h1>
            <button onClick = {() => setCount(count + 1)}>Increment</button>
        </>
    );
}