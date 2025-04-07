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


    return  <Paper elevation={16} style={{height: "40vw", textAlign: "center", placeItems: "center", borderRadius: "30px", padding:10, display:"flex", flexDirection:"column"}}>
        <Typography sx={{fontSize: "2vw"}} color={"secondary"}>{title}</Typography>
        <img src={posterImage} alt={title} style={{width:"50%"}}/>
        <Typography sx={{fontSize: "1.3vw", flexGrow: 1, overflow:"scroll"}}>{overview}</Typography>
        <Typography variant={"h6"} sx={{fontSize: "1.5vw"}}>{vote_average}</Typography>
    </Paper>
}