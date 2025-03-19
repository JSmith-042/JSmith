import { useState } from 'react'
import "./components/Greeting.jsx"
import Greeting from "./components/Greeting.jsx";
import UserCard from "./components/UserCard.jsx";
import CardContainer from "./components/CardContainer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CardContainer>
          <UserCard name="Bob" age="30"/>
          <UserCard name="Charlie" age="35"/>
          <UserCard name="Alice" age="25"/>
        </CardContainer>
      </div>
    </>
  )
}

export default App
