import React from 'react'
import {Button, Typography, Link, Container, Box} from '@material-ui/core';

const Copyrigth = (props) => {

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
        < Link color="inherit" href="https://mui.com/">
          {props.sx.text}
        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const App = () => {

  return (
    <div>

    <Button variant = "contained" color = "primary"> 
        Hola Mundo!
    </Button>

    <Container maxWidth="sm">
      <Box sx={{ my: 4}}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          New React App
        </Typography>
        <Copyrigth sx={{text: "My Website"}}/>
      </Box>
    </Container>

    </div>

  )
}

export default App