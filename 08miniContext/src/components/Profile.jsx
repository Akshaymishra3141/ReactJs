import React,{useContext} from 'react'
import UserContext from "../context/UserContext";


function Profile() {
    const {user} = useContext(UserContext)
  if(!user) return <div className="text-center font-medium text-slate-500 mt-6 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center space-x-2"><span>Please log in to view your profile</span></div>
  
  return (
    <div className="text-center mt-6 bg-emerald-50 p-6 rounded-2xl shadow-sm border border-emerald-100/80">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-3 shadow-inner">
        <span className="text-emerald-600 font-bold text-xl">{user.userName.charAt(0).toUpperCase()}</span>
      </div>
      <h3 className="text-xl font-bold text-emerald-800 tracking-tight">Welcome back!</h3>
      <p className="text-base text-emerald-600/90 mt-1 font-medium pb-2 border-b border-emerald-200/50">{user.userName}</p>
    </div>
  )
}

export default Profile