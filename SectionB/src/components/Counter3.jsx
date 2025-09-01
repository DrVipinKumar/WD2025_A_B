import React, { useState } from 'react'

const Counter3 = () => {
    let [count, setCount] = useState(0);
    function decrement() {
        setCount(()=>count--);        
        console.log(count);
       
    }
    const increment = () => {
        setCount(()=>count++);
        console.log(count);
    }
  return (
      <div>
          <button onClick={decrement}>Decrement</button>
          <b> {count} </b>
          <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter3