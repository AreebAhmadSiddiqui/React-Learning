import React,{useState,useContext} from 'react'
import UserContext from '../context/userContext'
const Login = () => {
    
    const [userName,setUserName] = useState("");
    const [userPass,setUserPass] = useState("");

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({userName,userPass})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' value={userName} onChange={(e)=> setUserName(e.target.value)} placeholder='username'/>
        <input type='text' value={userPass} onChange={(e)=> setUserPass(e.target.value)} placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>    
  )
}

export default Login