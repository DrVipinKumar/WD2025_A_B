const Body = (probs) => {
  return (
      <div>
          <h1>{probs.info}</h1>
          <h1>{probs.msg||""}</h1>
      </div>
  )
}

export default Body