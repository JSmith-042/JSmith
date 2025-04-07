import {Grid, Paper, Typography} from "@mui/material";
import "./Card.css"
import NotFound from "../assets/notFound.gif";

export default function Card({movie})
{
    const {title, overview, vote_average, poster_path} = movie;

    let posterImage;

    if (poster_path == null)
        posterImage = NotFound
    else
        posterImage = `https://image.tmdb.org/t/p/w500${poster_path}`;


    return  <Paper elevation={16} style={{height: "500px", textAlign: "center", backgroundColor:"rgba(199,239,155,0.51)"}}>

        <Typography sx={{fontSize: "2vw"}} color={"secondary"}>{title}</Typography>
        <img src={posterImage} alt={title} style={{width:"50%"}}/>
        <Typography sx={{fontSize: "1.3vw"}}>{overview}</Typography>
        <Typography variant={"h6"}>{vote_average}</Typography>
    </Paper>
}