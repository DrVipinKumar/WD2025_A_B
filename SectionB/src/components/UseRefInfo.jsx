import React, { useEffect, useRef, useState } from 'react'

const UseRefInfo = () => {
    const [info, setInfo] = useState("");
    let [count, setCount] = useState(0);
    const infoRef = useRef();
    const countRef = useRef();
    useEffect(() => {
        infoRef.current.focus();
        // infoRef.current.value = info;
      countRef.current=  setInterval(() => {
            setCount(count++);
      }, 1000)
        return () => {
            clearInterval(countRef.current);
        }
    },[]);
    const doClear = () => {
        infoRef.current.value = "";
        infoRef.current.focus();
        infoRef.current.style.color = "#00ff00";
    }
  return (
      <div style={{height:"80vh"}} className='d-flex flex-column'>
          <h2>Use Ref Example</h2>
          <div>
              <input type="text" 
                  value={info}
                  ref={infoRef}
                  onChange={(e)=>setInfo(e.target.value)}
              />
              <button className="btn btn-primary m-2"
                  onClick={doClear}>Clear</button>
          </div>
          <h3>Counter:{count}</h3>
          <button className="btn btn-primary m-2 w-25"
              onClick={() => {
                  clearInterval(countRef.current);
                  countRef.current = null;
                  }}>Stop</button>
      </div>
  )
}

export default UseRefInfo