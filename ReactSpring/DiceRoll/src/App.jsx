import { useState } from 'react'
import './styles/App.css'
import {genRanNum} from "./helper.js";
import Dice from "./components/Dice.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <p>Roll the dice if you dare!</p>
          <Dice num={genRanNum()}></Dice>
          <Dice num={genRanNum()}></Dice>

      </div>
  )
}

export default App
