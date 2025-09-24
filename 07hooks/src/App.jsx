import React, { useEffect, useState, useCallback } from "react";
import './App.css'
import ChildComponent from "./components/ChildComponent";
function App() {

  const [parent,setParent] = useState(0);
  const [child,setChild] = useState(0);

  const childFunc = useCallback(() => {
    console.log('Hey I am a child function');
  },[parent])

  return <div>
    <h1>Hi I am parent {parent}</h1>
    <button onClick={()=>setParent(parent+1)}>Click Parent to increase parent</button>
    <ChildComponent child={child} childFunc={childFunc}/>
  </div>
}

export default App
