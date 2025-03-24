import {useEffect, useState} from 'react'
import './App.css'
import Table from "./Table.jsx";

export default function App() {
  const [show, setShow] = useState(false);
  let comp = <></>;

  useEffect(() => {


  }, [show]);

  let handleSubmit = () => {setShow(true);}

  let handleReset = () => {setShow(false)}

  return (
    <div id="appMain">
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
      <div>
        {show ? <Table></Table> : null}
      </div>
    </div>
  )
}
