import { useState } from 'react'
import './App.css'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Results from "./components/Results.jsx";
import Error from "./components/Error.jsx"
import axios from "axios";
import {SearchContext} from "./components/SearchContext.jsx";

function App() {

  const [nowPlayingMovies, setNowPlayingMovies] = useState("");
  const [searchResults, setSearch] = useState("");
    const value = {searchResults, setSearch};

  const handleShow = () => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/now_playing',
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.VITE_TMDB_API_TOKEN}`
      }
    };
    axios(options)
        .then(response => {
          setNowPlayingMovies(response.data.results)})
        .catch(error => {
          console.log("Unable to connect to TMDB")
        })
  }



  return (
    <>
      <Router>
        <div className="App">
            <SearchContext.Provider value={value}>
            <NavBar></NavBar>
            <Routes>
              <Route path={"/"} element=<></>/>
              <Route path={"/now_playing"} element=<Results data={{movies: nowPlayingMovies}}/>/>
              <Route path={"/search"} element=<Results data={searchResults}/>/>
            </Routes>
            </SearchContext.Provider>
        </div>
      </Router>
    </>
  )
}

export default App
