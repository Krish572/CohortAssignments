import { useState } from "react"


function App() {

  return (
    <>
      <h1>Counter</h1>
      <Counter></Counter>
    </>
  )
}

function Counter() {

  const [count, setCount] = useState(0);

  function increaseCounter(){
    setCount(count+1);
  }

  function decreaseCounter(){
    setCount(count-1);
  }
  
  function resetCounter(){
    setCount(0);
  }

  return (<>
    <h2>{count}</h2>
    <button onClick={increaseCounter}>Increase</button>
    <button onClick={decreaseCounter}>Decrease</button>
    <button onClick={resetCounter}>Reset</button>
  </>)
}

export default App
