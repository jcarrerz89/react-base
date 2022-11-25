import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {FC} from "react";

const SearchBar: FC = () => {
    return (
        <Paper
            component="form"
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 500}}>
            <IconButton sx={{p: '10px'}} aria-label="menu">
                <MenuIcon/>
            </IconButton>
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="Find your next home"
                inputProps={{'aria-label': 'search google maps'}}/>
            <IconButton type="submit" sx={{p: '10px'}} aria-label="search">
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}

export default SearchBar;