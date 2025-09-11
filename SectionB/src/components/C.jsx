import React, { useContext } from 'react'
import { NameContext } from './UseContextInfo'
const C = () => {
  const info = useContext(NameContext);
  return (
    <div>
      <h2>Component C</h2>
      <h2>Your name:{info.join(",")}</h2>
      </div>
  )
}

export default C