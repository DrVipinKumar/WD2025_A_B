const Counter = (props) => {
    let { count,onIncrement,onDecrement } = props;
    const checkCSS = () => {
        if (count === 0) {
           return { color: "red" }
        } else {
            return { color: "black" }
        }
      }
  return (
      <div style={{height:"80vh"}}>
          <button className="btn btn-primary" onClick={onDecrement}>Decrement</button>
          <b className="m-3 btn btn-warning" style={checkCSS()}>
              {count===0?"Zero":count}
          </b>
          <button className="btn btn-primary" onClick={onIncrement}>Increment</button>
    </div>
  )
}

export default Counter