import { useState } from "react"


function App() {

  return (
    <>
      <Light/>
    </>
  )
}

function Light() {
  const [bulb, setBulb] = useState(true);
  return (
    <>
      <LightBulb bulb={bulb}/>
      <ToggleBulb setBulb={setBulb}/>
    </>
  )
}

function LightBulb({bulb}){
  //const [bulb, setBulb] = useState(true); since we need the setBulb function need to use in ToggleBulb component so we use roll up this state to lowest common ancester - Light component.
  return (
    <div>
      {bulb ? "Light ON" : "Light OFF"}
    </div>
  )
}

function ToggleBulb({setBulb}){
  return (
    <>
      <button onClick={() => {
        setBulb(bulb => !bulb);
      }}>Toggle</button>
    </>
  )
}

export default App


//After going through let's say there is component which is sibling to the Light component which needs the Bulb state. now we need to roll up the state to the LCA - App component. Now our application seems working fine. But now we can see Light component is exposed, means even though it won't need Bulb component it still getting that as a prop to just pass it their children who need them. 
// This concept is called prop drilling - which results increase in complexity due to passing props unnecessary also if there is any change in the prop structure, so we need to change in lot of places(components) since we used them and also increses the re-renders.
