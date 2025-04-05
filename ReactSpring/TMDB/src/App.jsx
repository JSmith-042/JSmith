import React, {useEffect, useState} from 'react'
import './App.css'
import {Route, BrowserRouter as Router, Routes, Link} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Results from "./components/Results.jsx";
import Error from "./components/Error.jsx"
import axios from "axios";
import {SearchContext} from "./components/SearchContext.jsx";
import {Button} from "@mui/material";
import {FilterAdultContent} from "./components/AdultFilter.js";

function App() {

  const [nowPlayingMovies, setNowPlayingMovies] = useState("");
  const [searchContext, setSearchContext] = useState("");
  const [searchResults, setSearchResults] = useState("");
    const [errorStatus, setErrorStatus] = useState("")

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/search/movie?query=${searchContext}`,
            params: {language: 'en-US', page: '1', include_adult: "false"},
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.VITE_TMDB_API_TOKEN}`
            }
        };
        axios(options)
            .then(response => {
                const filtered = FilterAdultContent(response.data.results);
                setSearchResults(filtered);}
        )
            .catch(error => {
                setErrorStatus("Sorry, unable to connect to TMDB")
                console.log(error)
            })
    }, [searchContext]);

  const handleShow = () => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/now_playing',
      params: {language: 'en-US', page: '1', include_adult: "false"},
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.VITE_TMDB_API_TOKEN}`
      }
    };
    axios(options)
        .then(response => {
          setNowPlayingMovies(FilterAdultContent(response.data.results))})
        .catch(error => {
            setErrorStatus("Sorry, unable to connect to TMDB")
            console.log(error)
        })
  }

  return (
    <>
      <Router>
        <div className="App">
            <SearchContext.Provider value={[searchContext, setSearchContext]}>
                <NavBar></NavBar>
                    <div style={{marginTop: "75px"}}>
                        <Routes>
                            <Route path={"/"} element={<div style={{textAlign:"center"}}><h1 style={{color:"green"}}>Welcome to the movie database</h1>
                                <Link to="/now_playing">
                                    <Button onClick={handleShow}>Show movies now playing</Button>
                                </Link>
                            </div>} />
                            <Route path={"/now_playing"} element=<Results data={{movies: nowPlayingMovies}}/>/>
                            <Route path={"/search"} element=<Results data={{movies: searchResults}} search={true}/>/>
                            <Route path={"/error"} element=<Error/>/>
                        </Routes>
                    </div>
            </SearchContext.Provider>
        </div>
      </Router>
    </>
  )
}

export default App
