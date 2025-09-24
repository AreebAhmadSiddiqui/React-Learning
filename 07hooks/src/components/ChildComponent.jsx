import React from 'react'

const ChildComponent = ({child,childFunc}) => {
  console.log('ChildComponent rendered'); // Debug

  childFunc();
  return <h3>Hi I am child {child}</h3>
}

export default React.memo(ChildComponent)