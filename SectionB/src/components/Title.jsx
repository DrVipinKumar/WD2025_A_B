import React from 'react'

const Title = ({ children }) => {
    console.log("inside title...");
  return (
      <div>
          <h3>{children}</h3>
      </div>
  )
}

export default React.memo(Title)