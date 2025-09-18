import React, { useReducer } from 'react'

const UseReducerInfo = () => {
    const initialState = {
        color:"#000000",
        size:"30px"
        };
    const reducer = (state, action) => {
        const key = `${action.color}_${action.size}`;
        switch (key) {
            case "red_32px": return { color: "#ff0000", size: action.size };
            case "green_32px": return { color: "#00ff00", size: action.size };
            case "blue_32px": return { color: "#0000ff", size: action.size };
            case "#ff0000_40px": return { ...state, size: "40px" };
            case "#00ff00_40px": return { ...state, size: "40px" };
            case "#0000ff_40px": return { ...state, size: "40px" };
            case "#000000_40px": return { ...state, size: "40px" };
            default: return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
      <div style={{height:"80vh"}}>
          <h2 style={{color:state.color,fontSize:state.size}} >Use Reducer Example</h2>
          <button className='btn btn-primary m-2' onClick={() => dispatch({ color: "red", size: "32px" })}>RED</button>
          <button className='btn btn-primary m-2' onClick={()=>dispatch({ color: "green", size: "32px" })}>GREEN</button>
          <button className='btn btn-primary m-2' onClick={()=>dispatch({ color: "blue", size: "32px" })}>BLUE</button>
          <button className='btn btn-primary m-2' onClick={()=>dispatch({ ...state, size: "40px" })}>40px</button>
      </div>
  )
}

export default UseReducerInfo