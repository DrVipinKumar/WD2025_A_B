import React, { useState } from 'react'
import A from "./A"
export const NameContext = React.createContext();
const UseContextInfo = () => {
const [numbers, setNumbers] = useState([12,34,56,78,90]);
   
  return (
      <div style={{height:"80vh"}}>
          <h2>Use Context Example</h2>
          <NameContext.Provider value={numbers}>
              <A/>
          </NameContext.Provider>
      </div>
  )
}

export default UseContextInfo