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
    <div className="bg-white py-8 px-10 shadow-xl rounded-3xl w-full border border-gray-100/60">
      <h2 className="text-3xl font-extrabold text-slate-800 mb-8 text-center tracking-tight">Sign In</h2>
      <form className="space-y-5" onSubmit={handleClick}>
        <div>
          <input
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="w-full px-5 py-3.5 rounded-xl bg-slate-50/50 border border-slate-200 text-slate-800 text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-full px-5 py-3.5 rounded-xl bg-slate-50/50 border border-slate-200 text-slate-800 text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400"
            placeholder="Password"
          />
        </div>
        <button 
          type="submit"
          className="w-full py-4 px-4 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-md hover:shadow-indigo-500/20 transform transition-all active:scale-[0.98] mt-2"
        >
          Secure Login
        </button>
      </form>
    </div>
  );
}

export default Login