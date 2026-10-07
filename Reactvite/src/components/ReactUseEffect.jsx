import React, { useEffect } from 'react'

function ReactUseEffect() {
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        // console.log("Hey...using useEffect hook");
        console.log("Counter:", count);
    });

    function increment() {
        setCount(count + 5);
    }

  return (
    <div>
        <h2 style={{color: 'red'}}>ReactUseEffect</h2>
        <h1 style={{color: 'red'}}>Counter: {count}</h1>
        
        <button onClick={increment}>Increment</button>
    </div>
  )
}


export default ReactUseEffect;