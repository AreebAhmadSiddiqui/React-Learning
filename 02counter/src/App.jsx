import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] =useState(0);

  const incVal= () =>{
    if(counter===20) return;
    setCounter(counter+1);
  }

  const decVal= () =>{
    if(counter==0) return;
    setCounter(counter-1);
  }
  return (
    <div>
      <h1>{counter}</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={incVal}>Increment Value</button>
      <button onClick={decVal}>Decrement Value</button>
      <p>Footer: {counter}</p>
    </div>
  )
}

export default App
