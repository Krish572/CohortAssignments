import { useState } from "react"

//Now we can create as many counters as we want and get the functionality from this hook.
//custom-hook are the functions which uses react-hooks internally. It's just encapsulate the reusable logic which includes usage of react hooks(that logic).
function useCounter(){
  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount(c => c+1);
  }

  function decreaseCount(){
    setCount(c => c-1);
  }

  return {
    count,
    increaseCount,
    decreaseCount
  }
}


function App() {

  const {count, increaseCount, decreaseCount} = useCounter();

  return (
    <>
      <div>{count}</div>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </>
  )
}

export default App
