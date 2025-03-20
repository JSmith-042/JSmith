import {useEffect, useState} from 'react'
import './styles/App.css'
import {genRanNum} from "./helper.js";
import Dice from "./components/Dice.jsx";

function App() {
  const [die1, setDie1] = useState(genRanNum());
  const [die2, setDie2] = useState(genRanNum());

  const [total, setTotal] = useState(die1+die2 + 2);

  const rollClick = () => {setDie1(genRanNum);setDie2(genRanNum);};

    useEffect(() => {
        setTotal(die1+die2 + 2)
    }, [die1, die2]);

  return (
      <div>
          <p>Roll the dice if you dare!</p>
          <Dice num={die1}></Dice>
          <Dice num={die2}></Dice>
          <div style={{padding:0}}>
            <button onClick={rollClick}>Roll</button>
          </div>
          <div>
              You rolled: {total}
          </div>
      </div>
  )
}

export default App
