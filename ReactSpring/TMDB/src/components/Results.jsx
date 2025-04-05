import Card from "./Card.jsx";
import {Box, Grid} from "@mui/material";

export default function Results({data, blkCnt})
{
    const {movies} = data;

    if (!movies) {
        return <Box sx={{textAlign: "center", color: "green", maxHeight: "15px"}}>
            <p style={{fontSize: "2vw"}}>No Movie Results Found</p>
        </Box>
    }

     return <>
     {blkCnt !== 0 ? <Box sx={{textAlign:"center", color: "green", maxHeight:"15px"}}>
             <p style={{fontSize: "2vw"}}>[{blkCnt}] Results Blocked By Adult Content Filter</p>
         </Box> : null}
         <Grid container spacing={2}>
             {movies.map((movie, index) => {
                 return <Grid size={4} key={index}><Card key={movie.id} movie={movie}/></Grid>
             })}
         </Grid>
     </>

}