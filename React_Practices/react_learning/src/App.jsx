import react, { useState } from 'react'
import './App.css'

const App =()=>{

  const [count, setCount] = useState(0)
  return (
    <div className='m-auto ' >
      <h1>hieveryone </h1>
      <div className='flex justify-center ' >
       <button onClick={()=> setCount(count +1)} className=' round-2x bg-green-400 color-white'>Click me  </button>
       <h1> {count}</h1>
      </div>
    </div>
  )
}

export default App