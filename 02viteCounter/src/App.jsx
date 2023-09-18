import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5
let [counter, setCounter] = useState(0)
  const addValue = () =>{
    if (counter <20){
    setCounter(counter+1)
    }
  }

  function removeValue(){

    if (counter > 0){
      setCounter(counter -1)

    }
    
  }
  return (
    <>
      <h1>chai or react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br /> <br />
      <button onClick={removeValue}>Remove Value: </button>
    </>
  )
}

export default App
