import React, { useCallback, useState } from 'react'
import Title from './Title'
import MyButton from './MyButton';

const UseCallbackInfo = () => {
     console.log("Rendering inside UseCallback");
    const [color,setColor]=useState("#000000")
    const [size, setSize] = useState("30px")
    const changeColor =useCallback(() => {
        let lcolor = Math.floor(Math.random() * 6177722).toString(16);
        setColor("#" + lcolor);
    },[])
    const changeSize = useCallback(() => {
        let lsize = Math.floor(Math.random() * 60) + 30;
        setSize(lsize + "px");
    }, []);
  return (
      <div className="d-flex flex-column" style={{height:"80vh"}}>
         <Title color={color} size={size}>UseCallback Example</Title>
          <Title>using REACT JS</Title>
          <div>
          <MyButton btnClick={changeColor}>Change Color</MyButton>
              <MyButton btnClick={changeSize}>Change Size</MyButton>
        </div>
      </div>
  )
}

export default UseCallbackInfo