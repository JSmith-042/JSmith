import {Link} from "react-router-dom";
import {
    AppBar,
    Box,
    Button, IconButton,
    InputBase,
    TextField,
    Toolbar,
    Typography
} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {SearchContext} from "./SearchContext.jsx";

export default function NavBar({data})
{
    const navigate = useNavigate();
    const [searchContext, setSearchContext] = useContext(SearchContext);

    const debounce = (callback, wait) => {
        let timeoutId = null;
        return (...args) => {
            window.clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => {
                callback(...args);
            }, wait);
        };
    }

    const handleSearch = (event) => {
        setSearchContext(event.target.value)
        navigate("/search")
    }

    return (<Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    <Link to="/">
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to="/now_playing">
                        <Button color="inherit">Now Playing</Button>
                    </Link>
                </Typography>
                    <TextField color="inherit" label="Search" onChange={debounce(handleSearch, 250)} slotProps={{input: { endAdornment: (<SearchOutlined color="inherit"></SearchOutlined>)}}} />
            </Toolbar>
        </AppBar>
    </Box>)
}