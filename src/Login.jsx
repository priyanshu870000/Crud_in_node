import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'


function Login() {
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate()

  async function Submit(e) {
    e.preventDefault()
    if (password.length < 5) {
      alert("Password Contain Atleast 5 character ")
    }
    else {
      const data = await axios.post(`http://localhost:3001/Login?email=${email}&password=${password}`)
      if (data.data.message === 'login successfully') {
        localStorage.setItem('email',email)
        setEmail("")
        setpassword("")
        navigate('./home')
      }
      else {
        alert(data.data.message)
      }
    }
  }
  return (
    <div className="App">
      <form>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter your Email' /> <br /> <br />
        <input type="password" onChange={(e) => setpassword(e.target.value)} value={password} placeholder='Enter your Password' /> <br /> <br />
        <button onClick={Submit}>Login</button>
        <p>IF YOU HAVE NO ACCOUNT <Link to='/Signup'>Signup</Link></p>
      </form>
    </div>
  )
}

export default Login;