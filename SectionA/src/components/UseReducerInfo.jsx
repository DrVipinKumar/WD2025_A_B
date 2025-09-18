import React, { useReducer } from 'react'

const UseReducerInfo = () => {
    const initialState = {
        color: "#000000",
        size: "30px"
    }
    const reducer = (state, action) => {
        const key = `${action.color}_${action.size}`;
        console.log(`${action.color}_${action.size}`);
          switch (key) {
             case "red_30px": return {size:action.size, color: "#ff0000" };
             case "green_30px": return { size:action.size,color: "#00ff00" };
             case "blue_30px": return {size:action.size, color:"#0000ff" };
             case "#ff0000_40px": return { ...state, size: "40px" };
             case "#00ff00_40px": return { ...state, size: "40px" };
             case "#0000ff_40px": return { ...state, size: "40px" };
             default: return state;
       }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
   
  return (
      <div style={{height:"80vh"}}>
          <h2 style={
              { color: state.color, fontSize: state.size }
          }>UseReducer Example</h2>
          <button className='btn btn-primary m-2' onClick={() => dispatch({ color: "red", size:"30px" })}>RED</button>
           <button className='btn btn-primary m-2' onClick={()=>dispatch({ color: "green", size:"30px" })}>GREEN</button>
           <button className='btn btn-primary m-2' onClick={()=>dispatch({ color: "blue", size:"30px" })}>BLUE</button>
           <button className='btn btn-primary m-2' onClick={()=>dispatch({ ...state, size:"40px" })}>40px</button>
      </div>
  )
}

export default UseReducerInfo