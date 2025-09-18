import React, { useEffect, useState } from 'react'

const UseEffectInfo = () => {
    let [count, setCount] = useState(0);
    let name = "";
    const onIncrement = () => {
        setCount(count++);
    }
    useEffect(() => {
        console.log(`Counter:${count}`);
        return () => {
            console.log(`Counter Stop`);
        }
    },[count]);
    useEffect(() => {
        console.log(`Render everytime`);
    });
  return (
      <div style={{height:"80vh"}}    >
          <h2>Use Effect Example</h2>
          <h2>Counter:{count}</h2>
           <button className="btn btn-primary"
              onClick={onIncrement}>
              Increment
          </button> 
      </div>
  )
}

export default UseEffectInfo