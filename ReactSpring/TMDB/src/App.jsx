import React, {useEffect, useState} from 'react'
import './App.css'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Results from "./components/Results.jsx";
import Error from "./components/Error.jsx"
import axios from "axios";
import {SearchContext} from "./components/SearchContext.jsx";

function App() {

  const [nowPlayingMovies, setNowPlayingMovies] = useState("");
  const [searchContext, setSearchContext] = useState("");
  const [searchResults, setSearchResults] = useState("");

    useEffect(() => {
        console.log(searchContext)
        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/search/movie?query=${searchContext}`,
            params: {language: 'en-US', page: '1'},
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.VITE_TMDB_API_TOKEN}`
            }
        };
        axios(options)
            .then(response => {
                setSearchResults(response.data.results);}
        )
            .catch(error => {
                console.log("Unable to connect to TMDB")
            })
    }, [searchContext]);

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
            <SearchContext.Provider value={[searchContext, setSearchContext]}>
            <NavBar></NavBar>
            <Routes>
              <Route path={"/"} element=<></>/>
              <Route path={"/now_playing"} element=<Results data={{movies: nowPlayingMovies}}/>/>
              <Route path={"/search"} element=<Results data={{movies: searchResults}}/>/>
            </Routes>
            </SearchContext.Provider>
        </div>
      </Router>
    </>
  )
}

export default App
