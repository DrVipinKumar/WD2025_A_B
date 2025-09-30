import React, { useState } from 'react'
import TableOf from './TableOf';

const UseMemoInfo = () => {
    const [num, setNum] = useState(0);
    const [color, setColor] = useState("#000000");
    const changeColor = () => {
        let lcolor = Math.floor(Math.random() * 61772).toString(16);
        setColor("#" + lcolor);
    }
  return (
      <div className='d-flex flex-column'>
          <h2> Use Memo Example</h2>
          <div>
              <input type="text"
                  value={num}
                  onChange={(e)=>setNum(e.target.value)}
              />
              <button className='btn btn-primary' onClick={changeColor}>Change Color</button>
          </div>
          <div style={{color}}>
          <TableOf num={num} />
          </div>
      </div>
  )
}

export default UseMemoInfo