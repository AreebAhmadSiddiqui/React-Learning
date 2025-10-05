import React from 'react'

//Common Button for different componets
const Button = ({children,type='button',bgColor='bg-blue-600',textColor='text-white',className='',text='Click Me',...props}) => {
  return (

    // ismein dekho ham apni default class to laga hi jo hame lagta hai needed hai baaki jo component jo chahe wo add kar sakta hai agar inke alawa kuch hai to wo props mein chali jaege
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>{text}</button>
  )
}

//
export default Button