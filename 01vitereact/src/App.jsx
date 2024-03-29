import { useState } from 'react'
import './App.css'

function App() {

  let [counter , setcounter] = useState(0);

  if(counter>=20 ){
    const addValue = () =>{
      console.log("clicked" ,counter);
      setcounter(counter +1)
    }
  }if else (counter<=0) {
      const remvalue = ()=>{
        setcounter(counter-1)
        console.log( counter);
      }
      
    } else {

      console.log("sorry we can't");
      
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

