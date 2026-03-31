import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

 

  return (
    <>
    <h1 className='bg-green-300 p-6 rounded-xl mb-4'>Tailwind Test</h1>
    <Card userName="Akshay" price ="40" />
    <Card userName="Krishna" price="20" />
    </>
  )
}

export default App
