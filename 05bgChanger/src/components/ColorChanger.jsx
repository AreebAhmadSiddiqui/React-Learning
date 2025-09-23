import React from 'react'

function ColorChanger({color}) {

  function handleClick(e){
    const color=e.target.textContent;
    document.querySelector('body').style.backgroundColor=color
  }
  return (
    <button style={{backgroundColor:color}} onClick={handleClick}>{color}</button>
  )
}

export default ColorChanger