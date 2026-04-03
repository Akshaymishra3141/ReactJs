import React, {useState,useContext} from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)
    const handleClick =(e)=>{
        e.preventDefault()
        setUser({userName,password})

    }
  return (
    <div>
      <h1>Login</h1>
      <input
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="User Name"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Password"
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Login