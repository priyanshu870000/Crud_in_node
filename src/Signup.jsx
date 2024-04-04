import { useState } from 'react'
import  axios  from 'axios'
import './App.css'
import { Link } from 'react-router-dom'

function Signup() { 
const [username,setuserName]=useState("")
const [email,setEmail]=useState("")
const [password,setpassword]=useState("")


async function Submit(e){
  e.preventDefault()
  if(password.length<5){
    alert("Password Contain Atleast 5 character ")
  }
  else{
    const data= await axios.post(`http://localhost:3001/Signup?username=${username}&email=${email}&password=${password}`)
    if(data.data.message==='Signup successfully'){
      setuserName("")
      setEmail("")
      setpassword("")
    }
    alert(data.data.message)
  }
}
  return (
    <div className="App">
      <form>
        <input type="text" onChange={(e)=>setuserName(e.target.value)} value={username} placeholder='Enter your Name' /><br /> <br />
        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}  placeholder='Enter your Email' /> <br /> <br />
        <input type="password" onChange={(e)=>setpassword(e.target.value)} value={password}  placeholder='Enter your Password' /> <br /> <br />
         <button onClick={Submit}>Signup</button>
         <p>IF YOU HAVE ACCOUNT <Link to='/'>Login</Link></p>
      </form>

    </div>
  )
}

export default Signup;