import {diceNums} from "../helper.js";
import '../styles/Dice.css';
import {useState} from "react";

export default function Dice({num})
{
    const [number, setNum] = useState(num);

    return (<div className={"fas fa-dice-" + diceNums[num]}></div>);
}