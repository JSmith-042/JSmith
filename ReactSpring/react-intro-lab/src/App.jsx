import { useState } from 'react'
import "./components/Greeting.jsx"
import {Greeting} from "./components/Greeting.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Greeting />
      </div>
    </>
  )
}

export default App
