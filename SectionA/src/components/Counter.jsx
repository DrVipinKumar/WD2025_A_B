const Counter = (props) => {
  let { count, onIncrement, onDecrement } = props   
  const countStyle = () => {
    if (count <= 0) {
       return { color: "red", fontSize: 20 }
    } else {
       return { color: "green", fontSize: 20 }
     }
  }
  return (
      <div>
          <button className="btn btn-primary" onClick={onDecrement}>Decrement</button>
          <b style={countStyle()}> {count} </b>
          <button className="btn btn-primary" onClick={onIncrement}>Increment</button>
      </div>
  )
}

export default Counter