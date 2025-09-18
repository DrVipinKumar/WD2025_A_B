import React, { useState } from 'react'
import A from './A'
export const context = React.createContext();
const UseContextInfo = () => {
  const [data, setData] = useState({
    roll_no: 1,
    name: "kiet",
    marks:[34,56,78,9,67,7],
  });
  return (
    <div style={{ height: "80vh" }}>
      <h2>Use Context Example</h2>
      <context.Provider value={data}>
      <A/>
      </context.Provider>      
    </div>
  )
}

export default UseContextInfo