import React from 'react'

const Title = (props) => {
    console.log("Rendering inside Title");
    const { color, size, children } = props;
  return (
      <div>
          <h3 style={{ color: color, fontSize: size }}>{children}</h3>
    </div>
  )
}

export default React.memo(Title)