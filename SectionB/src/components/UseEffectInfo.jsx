import React, { useEffect, useState } from 'react'

const UseEffectInfo = () => {
    let [count, setCount] = useState(0);
    let name = "";
    const onIncrement = () => {
        setCount(count++);
    }
    useEffect(() => {
        console.log(`without counter`);
        return () => {
            console.log("unmount");
        }
    });
    useEffect(() => {
        console.log(`Counter=${count}`);
    },[name,count]);
  return (
      <div className='d-flex flex-column' style={{height:"80vh"}}>
          <h2>Use Effect Example</h2>
          <h3>Count:{count}</h3>
          <button className='btn btn-primary w-25'
              onClick={onIncrement}
          >Increment</button>
    </div>
  )
}

export default UseEffectInfo