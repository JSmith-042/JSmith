import {Grid, Paper, Typography} from "@mui/material";
import NotFound from "../assets/notFound.gif";

export default function Card({movie})
{
    const {title, overview, vote_average, poster_path} = movie;

    let posterImage;

    if (poster_path == null)
        posterImage = NotFound
    else
        posterImage = `https://image.tmdb.org/t/p/w500${poster_path}`;


    return  <Paper elevation={16} style={{height: "50vw", textAlign: "center", borderRadius: "30px", padding:10}}>
        <Typography sx={{fontSize: "2vw"}} color={"secondary"}>{title}</Typography>
        <img src={posterImage} alt={title} style={{width:"50%"}}/>
        <Typography sx={{fontSize: "1.3vw", overscrollBehavior: "auto", scrollBehavior:"smooth"}}>{overview}</Typography>
        <Typography variant={"h6"} sx={{fontSize: "2vw"}}>{vote_average}</Typography>
    </Paper>
}