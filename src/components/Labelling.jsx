import React from 'react';
import {ToggleButton, ToggleButtonGroup, Box, Typography, Alert} from '@mui/material'

const Labelling = () => {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [alignment2, setAlignment2] = React.useState('web');

  const handleChange2 = (event, newAlignment) => {
    setAlignment2(newAlignment);
  };

  return (
      <Box style={{height: "27.5vh"}} sx={{ typography: 'body2', textAlign: 'left' }}>
        <Typography sx = {{p:2}}> 1. Cómo clasificaría al cliente? </Typography>  
        <ToggleButtonGroup
            color = "primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            sx = {{pl: 2}}
            >
        <ToggleButton size="small" value="Dependiente">Dependiente</ToggleButton>
        <ToggleButton size="small" value="Autónomo">Autónomo</ToggleButton>
        </ToggleButtonGroup>
        <Typography sx = {{p:2}}> 2. Qué forma de acercamiento debería tener? </Typography>
            
        <ToggleButtonGroup
            color = "primary"
            value={alignment2}
            exclusive
            onChange={handleChange2}
            sx = {{pl: 2, pb: 2}}
            >
        <ToggleButton size="small" value="Digital">Digital</ToggleButton>
        <ToggleButton size="small" value="Presencial">Presencial</ToggleButton>
        <ToggleButton size="small" value="Ninguno">Ninguno</ToggleButton>
        </ToggleButtonGroup>

        <Alert severity="success">This is a success alert — check it out!</Alert>

      </Box>
    
  );
}

export default Labelling
