import React, { useState } from 'react'
import Table from './components/Table'

const App = () => {
  const [n, setN] = useState(0);
  return (
    <div className='container mt-3'>
      <input type="text" value={n} onChange={(e)=>{setN(e.target.value)}}/>
      <Table n={n}/>
    </div>
  )
}

export default App