import React from 'react'
import Button from '@material-ui/core/Button';

const App = () => {
  return (
    <div style={{ height: "100px"}}>
      <Button style={{ "min-height": "100%", width: "30%" }} variant = "contained" color = "primary" size = "large" fullWidth = "True"> 
        Hola Mundo!
      </Button>
    </div>
      
  )
}

export default App