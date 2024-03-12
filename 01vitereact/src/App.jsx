import { useState } from 'react'
import './App.css'

function App() {

  let [counter , setcounter] = useState(0);
  const addValue = () =>{
    console.log("clicked" ,counter);
    setcounter(counter +1)
  }
  
  const remvalue = ()=>{
    setcounter(counter-1)
  }
  return (
    <>
    <h1>Chai or code</h1>
    <button onClick={addValue}>Add me {counter}</button>
    <br/><br/>
    <button id="rem" onClick = {remvalue}>remove value {counter}</button>
    </>
  )
}

export default App
