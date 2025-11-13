import { useEffect, useState } from "react"


function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increaseCount(){
    setCount(c => c+1);
  }

  function decreaseCount2(){
    setCount2(c => c+1);
  }


  return (
    <>
      {/* <Counter count={count} count2={count2}/>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount2}>Increase</button> */}
      <Timer/>
    </>
  )
}

function Timer(){

  const [sec, setSec] = useState(0);

  //Even though I did not passed nothing inside depenency array, when this mounts setInterval will start and if components unmounts it wont stop (because we did not unmount). Through conditional rendering we can mount and unmount the components on a web Page.
  useEffect(()=> {
    const inter = setInterval(() => {
      setSec(sec => sec + 1)
    }, 1000);

    return function(){
      clearInterval(inter);
    }

  }, [])

  return (
    <>
      <h1>{sec}</h1>
    </>
  )
}

function Counter(props){

  useEffect(function(){
    console.log("Counter Mounts")

    return function(){
      console.log("Component Unmounts")
    }
  }, [props.count])

  return (
    <>
      <h1>{props.count}</h1>
      <h1>{props.count2}</h1>
    </>
  )
}

export default App
