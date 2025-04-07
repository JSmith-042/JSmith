import React from "react";
import {Box} from "@mui/material";
import ErrorImg from "../assets/errorIMG.gif"

export default function Error()
{
    return (<Box style={{textAlign: "center"}}>
        <Box style={{width: "50vw", margin: "auto"}} component="div">
            <h1 style={{color: "lightpink"}}>Sorry, unable to reach the TMDB database</h1>
            <img src={ErrorImg} alt={"emotional damage gif"} style={{width: "100%"}}/>
        </Box>
    </Box>)
}