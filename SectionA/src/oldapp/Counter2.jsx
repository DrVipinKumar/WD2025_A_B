import React, { useState } from 'react'

const Counter = () => {
    let [count, setCount ] = useState(0);
    function Increment() {
        setCount( ()=>count++);       
        console.log(count);
    }
    function Decrement() {
      setCount( ()=>count--);  
        console.log(count);
    }
  return (
      <div>
          <button onClick={Decrement}>Decrement</button>
          <b> {count} </b>
          <button onClick={Increment}>Increment</button>
      </div>
  )
}

export default Counter