import {Link} from "react-router-dom";
import {
    AppBar,
    Box,
    Button,
    TextField,
    Toolbar,
    Typography
} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
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

    const disabledLinkStyle = {
        pointerEvents: !data ? 'none' : 'auto',
        opacity: !data ? 0.8 : 1,
        textDecoration: !data ? 'none' : 'underline',
        cursor: !data ? 'not-allowed' : 'pointer',
        color: !data ? 'grey' : 'blue',
    };

    return (<Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    <Link to="/" style={{paddingRight:"20px"}}>
                        <Button color="inherit" variant="outlined">Home</Button>
                    </Link>
                    <Link to={!data ? "/" : "/now_playing"} style={disabledLinkStyle}>
                        <Button color="inherit" variant="outlined" >Now Playing</Button>
                    </Link>
                </Typography>
                    <TextField color="inherit" label="Search" onChange={debounce(handleSearch, 250)} slotProps={{input: { endAdornment: (<SearchOutlined color="inherit"></SearchOutlined>)}}} />
            </Toolbar>
        </AppBar>
    </Box>)
}