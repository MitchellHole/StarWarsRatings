import React, { Component } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  search: {
     position: 'relative',
     borderRadius: theme.shape.borderRadius,
     backgroundColor: fade(theme.palette.common.white, 0.15),
     '&:hover': {
       backgroundColor: fade(theme.palette.common.white, 0.25),
     },
     marginRight: theme.spacing(2),
     width: '100%',
     [theme.breakpoints.up('sm')]: {
       marginLeft: theme.spacing(3),
       width: 'auto',
     },
   },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    marginLeft: "30px",
    fontFamily: "Roboto"
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = (props) => {
  return (
    <Grid
      justify="space-between" // Add it here :)
      container
      spacing={24}>
      <AppBar position="sticky">
        <Toolbar>
          <Grid item>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={useStyles().title}>
              Star Wars Resume Ratings
            </Typography>
          </Grid>
          <Grid style={{ flex: 1 }} item>
          </Grid>
          <Grid>
            <div className={useStyles().search}>
             <div className={useStyles().searchIcon}>
               <SearchIcon />
             </div>
             <InputBase
               placeholder="Search…"
               classes={{
                 root: useStyles().inputRoot,
                 input: useStyles().inputInput,
               }}
               inputProps={{ 'aria-label': 'search' }}
             />
           </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  )
};

export default Header;
