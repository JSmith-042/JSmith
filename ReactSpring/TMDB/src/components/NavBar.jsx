import {Link} from "react-router-dom";
import {
    AppBar,
    Box,
    Button,
    InputBase,
    styled,
    Toolbar,
    Typography
} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {SearchContext} from "./SearchContext.jsx";

export default function NavBar()
{
    const [searchVal, setSearchVal] = useState("")

    const debounce = (callback, wait, event) => {
        let timeoutId = null;
        console.log(event.target.value)
        return (...args) => {
            window.clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => {
                callback(...args);
            }, wait);
        };
    }

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        // backgroundColor: alpha(theme.palette.common.white, 0.15),
        // '&:hover': {
        //     backgroundColor: alpha(theme.palette.common.white, 0.25),
        // },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    const navigate = useNavigate();
    const { searchValue, setSearch } = useContext(SearchContext);

    const handleSearch = (event) => {
        // const options = {
        //     method: 'GET',
        //     url: 'https://api.themoviedb.org/3/movie/now_playing',
        //     params: {language: 'en-US', page: '1'},
        //     headers: {
        //         accept: 'application/json',
        //         Authorization: `Bearer ${process.env.VITE_TMDB_API_TOKEN}`
        //     }
        // };
        // axios(options)
        //     .then(response => {setNowPlayingMovies(response.data.results)})
        //     .catch(error => {
        //         console.log("Unable to connect to TMDB")
        //     })

        console.log(event);
        setSearch(event.target.value())
        navigate("/search")
    }


    return (<Box sx={{flexGrow: 1}}>
        <AppBar position="sticky">
            <Toolbar>
                <Typography
                    variant="div"
                    sx={{ flexGrow: 1}}
                >
                    <Link to="/">
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to="/now_playing">
                        <Button color="inherit">Now Playing</Button>
                    </Link>
                </Typography>
                <Search id="searchInput" onChange={(event) => {debounce(handleSearch, 500, event)}} defaultValue={searchValue}>
                    <SearchIconWrapper>
                        <SearchOutlined />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Toolbar>
        </AppBar>
    </Box>);
}