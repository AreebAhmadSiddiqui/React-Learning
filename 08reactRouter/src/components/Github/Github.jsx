import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

    const data=useLoaderData();
    console.log(data);
    
    // const [name,setName]=useState('');
    // const [img,setImg]=useState('https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png');
    // useEffect(()=>{
        // fetch("https://api.github.com/users/areebahmadsiddiqui")
        // .then((res)=>{
        //     return res.json()
        // }).then((data)=>{
        //     setName(data.name);
        // }).catch((err)=>console.log((err)));
        // const fetchName= async () => {
        //     try {
        //         const res= await fetch("https://api.github.com/users/areebahmadsiddiqui")
        //         const data= await res.json();
        //         console.log(data);
        //         setName(data.name);
        //         setImg(data.avatar_url)
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
        // fetchName();
    // },[])

  return  (
    <div style={{'display':'flex','justifyContent':'space-evenly','alignItems':'center'}}>
        <img style={{'height':'100px',"width":"100px"}} src={data.avatar_url}/>
        <div className='text-center my-4' >Name: {data.name}</div>
    </div>
  )
}

export default Github

export const GithubDataLoader = async () =>{
    try {
        const res= await fetch("https://api.github.com/users/areebahmadsiddiqui")
        const data= res.json();
        return data
    } catch (error) {
        console.log(error);
    }
}