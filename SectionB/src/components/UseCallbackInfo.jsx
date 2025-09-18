import React, { useCallback, useState } from 'react'
import Title from './Title'
import MyButton from './MyButton';
import { useLinkClickHandler } from 'react-router-dom';

const UseCallbackInfo = () => {
    console.log("inside callback...");
    const [color, setColor] = useState("#000000");
    const [size, setSize] = useState("30px");
    
    const changeColor = useCallback(() => {
        let color = "#" + Math.floor(Math.random() * 67772).toString(16);
        setColor(color);
    }, [color]);
    const changeSize = useCallback(() => {
        let size = Math.floor(Math.random() * 60) + 30 + "px";
        setSize(size);
    }, [size]);
  return (
      <div style={{ height: "80vh" }}>
          <Title>Use Callback Example</Title>   
          <h3 style={{ color: color, fontSize: size }}>Welcome to callback hook</h3>
          <div className='m-2'>
          <MyButton myClick={changeColor}>Change Color</MyButton>
          </div>
          <div className='m-2'>
            <MyButton myClick={changeSize}>Change Size</MyButton>
          </div>
      </div>
  )
}

export default UseCallbackInfo