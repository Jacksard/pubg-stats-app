import React from 'react';
import './App.css';
import Main from './Components/Main/Main';

import Grid from '@material-ui/core/Grid';
import Navbar from './Components/Navbar/Navbar';

// Init dotenv
require('dotenv').config();

function App() {
  return (
    <div className='App'>
      <div className='overlay'>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <Main />
        </Grid>
      </div>
    </div>
  );
}

export default App;
