import {diceNums} from "../helper.js";
import '../styles/Dice.css';
import {useState} from "react";

export default function Dice(props)
{
    const [number, setNum] = useState(props.num);

    return (<div className={"fas fa-dice-" + diceNums[props.num]}></div>);
}