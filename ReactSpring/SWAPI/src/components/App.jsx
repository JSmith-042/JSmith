import {useEffect, useState} from 'react'
import './App.css'
import Table from "./Table.jsx";
import axios from "axios";

export default function App() {
  const [show, setShow] = useState(false);
  const [rows, setRows] = useState([]);
  const SWAPI_ENDPOINT = "https://swapi.dev/api/people";

  let comp = <></>;

  useEffect(() => {
      if (!show)
          return;

      try {
          axios.get(SWAPI_ENDPOINT)
              .then((response) => {
                  console.log(response.status);
                  setRows(response.data.results);
              })
              .catch((exception) => {
                  console.log("Unable to connect to SWAPI!");
                  console.log(exception)
              });
      }
      catch (exception)
      {
          console.log(exception)
      }
  }, [show]);

  let handleSubmit = () => {setShow(true);}

  let handleReset = () => {setShow(false)}

  return (
    <div id="appMain">
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
      <div id="tableDiv">
          <div></div>
        {show ? <Table rows={rows}></Table> : null}
      </div>
    </div>
  )
}
