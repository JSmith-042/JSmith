import Card from "./Card.jsx";
import {Grid} from "@mui/material";

export default function Results({data})
{
    if (!data)
        return <></>

    const {movies} = data;

    console.log(data)

    if (!movies)
        return <></>

    console.log(data)

     return <Grid container spacing={2}>
         {movies.map((movie, index) => {return <Grid size={4} key={index}><Card key={movie.id} movie={movie}/></Grid>})}
     </Grid>

}