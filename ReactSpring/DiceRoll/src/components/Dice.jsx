import {diceNums} from "../helper.js";
import '../styles/Dice.css';

export default function Dice(props)
{

    return (<div className={"fas fa-dice-" + diceNums[props.num]}></div>);
}