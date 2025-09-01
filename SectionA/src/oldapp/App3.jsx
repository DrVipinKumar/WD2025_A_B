import React, {useState} from 'react'
import Counter from './components/Counter'
const App = () => {
  let [count, setCount] = useState(0);
   function Increment() {
     setCount(() => {
         count++
       console.log(count);
       return count;
     });       
    }
    function Decrement() {
      setCount( ()=>count--);  
        console.log(count);
    }
  return (
      <div className='container mt-3'>
      <Counter
        count={count}
        onIncrement={Increment}
        onDecrement={Decrement}
      />
      </div>
  )
}

export default App