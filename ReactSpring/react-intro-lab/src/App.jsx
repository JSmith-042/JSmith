import { useState } from 'react'
import "./components/Greeting.jsx"
import Greeting from "./components/Greeting.jsx";
import UserCard from "./components/UserCard.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <UserCard name="Bob" age="30"/>
        <UserCard name="Charlie" age="35"/>
        <UserCard name="Alice" age="25"/>
      </div>
    </>
  )
}

export default App
