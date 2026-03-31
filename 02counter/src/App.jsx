import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [count , setCount] = useState(0)
  const addValue = () =>{
    if(count>=20){
      alert("You can't add more than 20 trophies")
    }
    else{
      setCount(count+1)
    }
  }
  const removeValue = () =>{
    if(count==0){
      alert("You can't remove more trophies")
    }else{
      setCount(count-1)
    }
  }

  return (
    
    <div id='center'> 
    
    <h1>No Of Trophy RCB Will Win</h1>
    <h3>Counter Value : {count}</h3>

    <button onClick={addValue}>Add Trophy</button>
    <br></br>
    <button onClick={removeValue}> Remove Trophy</button>
    </div>
   

  )
}

export default App
