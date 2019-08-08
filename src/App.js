import React from 'react';
import './App.css';
import API from './api/api';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Init dotenv
require('dotenv').config();

function App() {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#184336'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: 'grey'
    }
  }));

  const classes = useStyles();

  return (
    <div className='App'>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>NavBar</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <API />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Footer</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
