import { useState } from 'react'
import './App.css'
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import axios from "axios";
import MovieCard from "./components/MovieCard.jsx";

function App() {

    const [movies, setMovies] = useState("");


    function handleClick() {
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

                let movieArray = response.data.results.map((movie) => {return <MovieCard key={movie.id} movie={movie}/>})
                setMovies(movieArray)})
            .catch(error => {
                 console.log(error.message)})

    }

    return (
    <>
        <h1>App Component</h1>

        <Router>
            <div className="App">
                <ul>
                    <li>
                        <Link to={"/home"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                    <hr/>

                    <Routes>
                        <Route path={"/home"} element=<Home/>/>
                        <Route path={"/about"} element=<About/>/>
                        <Route path={"/contact"} element=<Contact/>/>
                    </Routes>
                </ul>
            </div>
        </Router>
        <button onClick={handleClick}>Now Playing</button>
        {movies}
    </>
  )
}

export default App
