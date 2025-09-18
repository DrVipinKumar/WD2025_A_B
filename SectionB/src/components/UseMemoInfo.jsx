import React, {useState} from 'react'
import TableOf from './TableOf'

const UseMemoInfo = () => {
    const [num, setNum] = useState(2)
    const [color, setColor] = useState("#000000")
    const changeColor = () => {
        let rColor = "#" + Math.floor(Math.random() * 6177772).toString(16);
        setColor(rColor);
     }
  return (
      <div className="d-flex flex-column" style={{height:"80vh"}}>
          <h3>Use Memo Example</h3>
          <div><input type="text"
              value={num}
              onChange={(e) => setNum(e.target.value)} />
              <button className='btn btn-primary'
                  onClick={changeColor}
              >Change Color</button>
          </div>
          <div style={{ color: color }}>
              <TableOf num={num} />
          </div>
      </div>
  )
}

export default UseMemoInfo