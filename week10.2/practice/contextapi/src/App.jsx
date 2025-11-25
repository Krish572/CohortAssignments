import { useContext } from "react";
import { useState, createContext } from "react"

const bulbContext = createContext();

function BulbProvider({children}) {
  const [bulb, setBulb] = useState(true);
  return(
    <>
      <bulbContext.Provider value={{bulb, setBulb}}>
        {children}
      </bulbContext.Provider>
    </>
  )
}

function App() {
  // const [bulb, setBulb] = useState(true);
  return (
    //We can create the context and provide the value like this now all the children including Light can use the values of context (now we can exclude the prop drilling)
    // <>
    //   <bulbContext.Provider value={{bulb: bulb, setBulb: setBulb}}>
    //     <Light/>
    //   </bulbContext.Provider>
    // </>

    //Better approach : Now we can see that our app component is bit cleaner
    //We just created a new component which just wrap the provider of the context.
    <>
      <BulbProvider>
        <Light/>
      </BulbProvider>
    </>
  )
}

function Light() {
  return (
    <>
      <LightBulb />
      <ToggleBulb />
    </>
  )
}

function LightBulb(){
  const {bulb} = useContext(bulbContext)
  return (
    <div>
      {bulb ? "Light ON" : "Light OFF"}
    </div>
  )
}

function ToggleBulb(){
  const bulbInfo = useContext(bulbContext);
  const {setBulb} = bulbInfo;
  return(
    <button onClick={() => setBulb(bulb => !bulb)}>Toggle</button>
  )
}

export default App
