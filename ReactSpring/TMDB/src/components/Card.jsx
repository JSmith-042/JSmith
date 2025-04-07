import {Paper} from "@mui/material";
import "./Card.css"

export default function Card({movie})
{
    const {title, overview, vote_average, poster_path} = movie;

    let posterImage;

    if (poster_path == null)
        posterImage = "/assets/notFound.gif";
    else
        posterImage = `https://image.tmdb.org/t/p/w500${poster_path}`;


    return <Paper elevation={16} style={{minHeight: "500px", textAlign: "center"}}>
        <h1>{title}</h1>
        <img src={posterImage} alt={title} style={{width:"50%"}}/>
        <p>{overview}</p>
        <p>{vote_average}</p>
    </Paper>
}