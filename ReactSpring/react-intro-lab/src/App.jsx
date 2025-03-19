import { useState } from 'react'
import "./components/Greeting.jsx"
import Greeting from "./components/Greeting.jsx";
import UserCard from "./components/UserCard.jsx";
import CardContainer from "./components/CardContainer.jsx";

function App() {
  const [count, setCount] = useState(0)
  let users = [{name:"Bob", age:25}, {name:"Charlie", age:35}, {name:"Alice", age:30}];

  users = userSort(users);

  let userCards = [];

  users.forEach((value, index) => {userCards.push(<UserCard key={index} name={value.name} age={value.age}></UserCard>)});

  return (
    <>
      <div>
        <CardContainer>
          {userCards}
        </CardContainer>
      </div>
    </>
  )
}

export default App

function userSort(array)
{
  return array.toSorted((a, b) => b.age - a.age);
}
