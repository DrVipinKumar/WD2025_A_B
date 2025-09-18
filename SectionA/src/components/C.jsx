import React, { useContext } from 'react'
import { context } from './UseContextInfo';
const C = () => {
    const data = useContext(context);
  return (
    <div>
          <h2> C Compoment</h2>
          <h2>Name:{data.name}</h2>
          <h2>Marks:{data.marks.join(",")}</h2>
      </div>
  )
}

export default C