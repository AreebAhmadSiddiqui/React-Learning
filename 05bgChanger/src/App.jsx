import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorChanger from './components/ColorChanger'

function App() {

  const colorArr=['blue','yellow','green','cyan','red','black']
  const components=colorArr.map((color)=><ColorChanger color={color} />)
  return (
    <div className='container'>
      {components}
    </div>
  )
}

export default App
