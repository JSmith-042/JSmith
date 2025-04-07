import React, {useEffect, useState} from 'react'
import './App.css'
import {Route, BrowserRouter as Router, Routes, Link, Navigate} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Results from "./components/Results.jsx";
import Error from "./components/Error.jsx"
import axios from "axios";
import {SearchContext} from "./components/SearchContext.jsx";
import {Button, ThemeProvider, Typography} from "@mui/material";
import {FilterAdultContent} from "./components/AdultFilter.js";
import {Theme} from "./components/ui/Theme.jsx";

function App() {

    const [nowPlayingMovies, setNowPlayingMovies] = useState("");
    const [searchContext, setSearchContext] = useState("");
    const [searchResults, setSearchResults] = useState("");
    const [errorStatus, setErrorStatus] = useState("");
    const [blockedCount, setBlockedCount] = useState(0)

    useEffect(() => {
        setBlockedCount(0);
        setErrorStatus("");
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
                    if (filtered) {
                        setBlockedCount(response.data.results.length - filtered.length);
                    }
                    setSearchResults(filtered);
                }
            )
            .catch(error => {
                setErrorStatus("Sorry, unable to connect to TMDB")
            })
    }, [searchContext]);

    const handleShow = () => {
        setBlockedCount(0);
        setErrorStatus("");
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
                const filtered = FilterAdultContent(response.data.results);
                if (filtered) {
                    setBlockedCount(response.data.results.length - filtered.length);
                }
                setNowPlayingMovies(filtered)
            })
            .catch(error => {
                setErrorStatus("Sorry, unable to connect to TMDB")
            })
    }


    return (
        <>
            <Router>
                <div className="App">
                    <ThemeProvider theme={Theme}>
                        <SearchContext.Provider value={[searchContext, setSearchContext]}>
                            <NavBar data={nowPlayingMovies}></NavBar>
                            <div style={{marginTop: "75px"}}>
                                <Routes>
                                    <Route path={"/"}
                                           element={<div style={{textAlign: "center"}}><Typography variant={"h3"}
                                               style={{fontSize:"3vw", padding: 20}} color="info">Welcome
                                               to the movie database</Typography>
                                               <Link to="/now_playing">
                                                   <Button onClick={handleShow} variant={"contained"}>Show movies now playing</Button>
                                               </Link>
                                           </div>}/>
                                    <Route path={"/now_playing"} element={errorStatus ? <Navigate to={"/error"}/> :
                                        <Results data={{movies: nowPlayingMovies}} blkCnt={blockedCount}/>}/>
                                    <Route path={"/search"} element={errorStatus ? <Navigate to={"/error"}/> :
                                        <Results data={{movies: searchResults}} blkCnt={blockedCount}/>}/>
                                    <Route path={"/error"} element=<Error/>/>
                                </Routes>
                            </div>
                        </SearchContext.Provider>
                    </ThemeProvider>
                </div>
            </Router>
        </>
    )
}

export default App
