// Imports
import React from 'react';
import {Box, Grid, Paper} from '@mui/material'
import { styled } from '@mui/material/styles';
import './App.css';

// Components
import Login from './components/Login';
import Header from './components/Header';
import GeneralStats from './components/GeneralStats';
import LastOrders from './components/LastOrders';
import LastApproaches from './components/LastApproaches';
import EventStats from './components/EventStats';

import Labelling from './components/Labelling';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// Images

function App() {

  return (
    <div className = "App">
      
      <Header/>
      <Box sx={{ flexGrow: 1, p:3 }}>
        <Grid container spacing={"2vh"}>
          <Grid item xs={8}>
              <Grid container rowSpacing={2}>
                <Grid item xs={12}> <Item> <GeneralStats/> </Item> </Grid>
                <Grid item xs={12}> <Item> <LastOrders/> </Item> </Grid>
                <Grid item xs={12}> <Item> <LastApproaches/> </Item> </Grid>
              </Grid>
          </Grid>
          <Grid item xs={4}>
          <Grid container rowSpacing={"2vh"}>
                <Grid item xs={12}> <Item> <EventStats/> </Item> </Grid>
                <Grid item xs={12}> <Item> <Labelling/> </Item> </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Box>

    </div>
  )
}

export default App