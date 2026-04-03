import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
   <UserContextProvider>
   <h1 className='text-3xl bg-red-500 text-center'>React With Akshay</h1>
   <Login/>
   <Profile/>
   </UserContextProvider>
  )
}

export default App
