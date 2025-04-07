import Card from "./Card.jsx";
import {Box, Grid, Typography} from "@mui/material";

export default function Results({data, blkCnt})
{
    const {movies} = data;

    if (!movies) {
        return <Box sx={{textAlign: "center", color: "green", maxHeight: "15px"}}>
            <Typography style={{fontSize: "2vw"}}>No Movie Results Found</Typography>
        </Box>
    }

     return <>
     {blkCnt !== 0 ? <Box sx={{textAlign:"center", color: "green", p:"1px"}}>
             <Typography style={{fontSize: "2vw"}}>[{blkCnt}] Results Blocked By Adult Content Filter</Typography>
         </Box> : null}
         <Grid container spacing={2}>
             {movies.map((movie, index) => {
                 return <Grid size={4} key={index}><Card key={movie.id} movie={movie}/></Grid>
             })}
         </Grid>
     </>

}