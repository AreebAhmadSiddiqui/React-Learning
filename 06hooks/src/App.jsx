import { useState, useCallback, useEffect ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length,setLength]  = useState(6);
  const [hasNum,setHasNum]  = useState(false);
  const [hasChar,setHasChar]= useState(false);
  const [pass,setPass]=useState("passasdasdword");


  // for password reference
  const passRef= useRef(null);

  const passwordGenerator = useCallback(()=>{
    let password=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (hasNum) str+="0123456789"
    if (hasChar) str+="<>?:/.~`!@#$%^&*()[]{}"

    for(let i=1;i<=length;i++){
      // console.log(str);
      let idx=Math.floor(Math.random()*str.length)
      let char=str[idx]
      // console.log(idx,char);
      
      password+=char
    }

    setPass(password);

  },[length,hasNum,hasChar])

  const handleClick = () =>{
    passRef.current?.select();
    navigator.clipboard.writeText(pass)
  }
  useEffect(()=>{
    passwordGenerator()
  },[length,hasNum,hasChar])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-4'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
            type='text'
            value={pass}
            className='outline-none w-full py-1 px-3'
            placeholder="Password"
            readOnly
            ref={passRef}
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={handleClick}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={hasNum}
          id='numberInput'
          onChange={()=>{
            setHasNum(prev => !prev)
          }}
          />
          <label htmlFor='numberInput'>Numbers</label>
          <input 
          type='checkbox'
          defaultChecked={hasChar}
          id='charInput'
          onChange={()=>{
            setHasChar(prev => !prev)
          }}
          />
          <label htmlFor='charInput'>Character</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
