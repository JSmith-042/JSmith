import React from "react";
import {Box} from "@mui/material";

export default function Error()
{
    return (<Box style={{textAlign: "center"}}>
        <h1 style={{color:"lightpink"}}>Sorry, unable to reach the TMDB database</h1>
        <img src={"/assets/errorIMG.gif"} alt={"emotional damage gif"}/>
    </Box>)
}