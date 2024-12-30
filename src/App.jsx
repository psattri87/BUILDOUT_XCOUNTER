import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count=>count+1)}>Decrement</button>
      <button onClick={()=>setCount(count=>count-1)}>Increment</button>
    </div>
  )
}

export default App
