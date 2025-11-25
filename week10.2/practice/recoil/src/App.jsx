import { useContext } from "react";
import { createContext, useState } from "react"
import {atom, RecoilRoot, useRecoilValue, useSetRecoilState} from "recoil"

// const countContext = createContext();

//When you are using context api, you are just excluding the prop drilling but not unnecessary rendering - here as we can see even though we are just using the count in the Displaycount component, whenever we are clicking the increase or decrease that letting every component to re-render, which does not matter in small apps, but in large applications it does.
// function CountProvider({children}) {
//   const [count, setCount] = useState(0);
//   return(
//     <>
//       <countContext.Provider value={{count, setCount}}>
//         {children} 
//       </countContext.Provider>
//     </>
//   )
// }

const count = atom({
  key: "countState",
  default: 0
})

function App() {
  return (
    <>
      {/* <CountProvider>
        <Increase/>
        <Decrease/>
        <DisplayCount/>
      </CountProvider> */}
      <RecoilRoot>
        <Increase/>
        <Decrease/>
        <DisplayCount/>
      </RecoilRoot>
    </>
  )
}

function Increase(){

  // const {setCount} = useContext(countContext);
  const setCount = useSetRecoilState(count);

  return (
    <button onClick={() => {setCount(c => c+1)}}>Increase</button>
  )
}

function Decrease(){
  // const {setCount} = useContext(countContext);
  const setCount = useSetRecoilState(count);
  return(
    <button onClick={() => setCount(c => c-1)}>Decrease</button>
  )
}

function DisplayCount(){
  // const {count} = useContext(countContext);
  const countValue = useRecoilValue(count);
  return(
    <div>{countValue}</div>
  )
}

export default App
