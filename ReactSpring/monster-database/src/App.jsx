import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MonsterCard from "./components/MonsterCard.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <h1>Monster Database</h1>
       <MonsterCard
        firstName="Zorg"
        lastName="the Destroyer"
        age={500}
        type="undead"
        moreInfo="Terrifies galaxies"
       ></MonsterCard>
      </>
  )
}

export default App
