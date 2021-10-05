// Imports
import React from 'react';
import {Box, Grid, Paper} from '@mui/material'
import { styled } from '@mui/material/styles';
import './App.css';

// Components
import Login from './components/Login';
import Header from './components/Header';
import LastOrders from './components/LastOrders';
import LastApproaches from './components/LastApproaches';
import EventStats from './components/EventStats';
import FirstStats from './components/FirstStats';
import AcumStats from './components/AcumStats';
import Verticals from './components/Verticals';
import CRM from './components/CRM'

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
      <Box sx={{ p:"2vh" }}>
        <Grid container spacing={"2vh"} >
          <Grid item xs={5}>
              <Grid container rowSpacing={"2vh"}>
                <Grid item xs={12}> <Item> <FirstStats/> </Item> </Grid>
                <Grid item xs={12}> <Item> <LastOrders/> </Item> </Grid>
                <Grid item xs={12}> <Item> <LastApproaches/> </Item> </Grid>
              </Grid>
          </Grid>
          <Grid item xs={4}>
              <Grid container rowSpacing={"2vh"}>
                <Grid item xs={12}> <Item> <Verticals/> </Item> </Grid>
                <Grid item xs={12}> <Item> <AcumStats/> </Item> </Grid>
                <Grid item xs={12}> <Item> <CRM/> </Item> </Grid>
              </Grid>
          </Grid>
          <Grid item xs={3}>
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