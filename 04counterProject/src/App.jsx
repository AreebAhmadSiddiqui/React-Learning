import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick (e){
    const val=e.target.className
    if(val==='inc'){
      setCount(count+1);
      setCount(count+1);
      setCount(count+1);
      setCount(count+1);
    }else{
      setCount(count-1);
    }
  }
  return (
    <>
      <div>
        <h1>Counter Program</h1>
        <p>{count}</p>
        <button onClick={handleClick} className='dec'>Decrement</button>
        <button onClick={handleClick} className='inc'>Increment</button>
      </div>
    </>
  )
}

export default App
