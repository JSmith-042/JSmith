import Card from "./Card.jsx";
import {Grid} from "@mui/material";

export default function Results({data, search})
{
    if (!data) {
        if(search)
            return <h1>Searching...</h1>
        return <></>
    }

    const {movies} = data;

    if (!movies)
        return <></>

     return <Grid container spacing={2}>
         {movies.map((movie, index) => {return <Grid size={4} key={index}><Card key={movie.id} movie={movie}/></Grid>})}
     </Grid>

}