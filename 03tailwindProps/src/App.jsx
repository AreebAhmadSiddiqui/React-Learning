import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 mb-4 p-2'>Tailwind Test</h1>
      <Card 
      title='test1'
      description='Lorem test asdjhasd asjgdasjd asdgjasdga js d 1'
      />
      <Card
      title='test2'
      description='Lorem test asdjhasd asjgdasjd asdgjasdga js d 2'
      />
      <Card
      title='test3'
      description='Lorem test asdjhasd asjgdasjd asdgjasdga js d 3'
      />
    </>
  )
}

export default App
