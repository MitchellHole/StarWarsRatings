import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import LarkinVideo from './components/LarkinVideo'
import CombatantsTable from './components/combatants/CombatantsTable'


import './App.css';

import {
  ThemeProvider,
  createMuiTheme,
  Container
 } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import { green, orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#022448",
    },
    secondary: {
      main: "#f27d42",
    }
  }
})


function App() {

  useEffect(() => {
    document.title = "Star Wars Ratings";
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Container>
          <LarkinVideo />
          <CombatantsTable />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
