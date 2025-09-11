import React, { useReducer } from 'react'
const reducer = (state, action) => {
    switch (action) {
        case "red": 
            return { color: "#ff0000", fontSize: "20px" }
        case "green":
            return { color: "#00ff00", fontSize: "20px" }
        case "30px":
            return { ...state, fontSize: "30px" }
        case "40px":
            return { ...state, fontSize: "40px" }
    }
}
const initialState = {
    color: "#000000",
    fontSize:"20px",
}
const Testing = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
      <div className='d-flex flex-column justify-content-center align-items-center' style={{height:"80vh"}}>
          <h2 style={state}>DVK is OK</h2>
          <button className='btn btn-warning w-25 m-2' onClick={()=>dispatch("red")}>RED</button>
          <button className='btn btn-warning w-25 m-2' onClick={()=>dispatch("green")}>GREEN</button>
          <button className='btn btn-warning w-25 m-2' onClick={()=>dispatch("30px")}>30px</button>
          <button className='btn btn-warning w-25 m-2' onClick={()=>dispatch("40px")}>40px</button>
    </div>
  )
}

export default Testing