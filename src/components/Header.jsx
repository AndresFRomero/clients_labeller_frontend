import React from 'react'
import {
    AppBar,
    Box,
    Toolbar,
    Button,
    IconButton,
    Typography
} from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu'

//  Images
import tulLogo from '../images/logo-tul.png'

const Header = () => {
    return (
        <div>
            <Box sx = {{ flexGrow: 1 }}>
                <AppBar position="static" style = {{ background: '#009688'}}>
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 3 }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="h6" sx={{ flexGrow: 1 }}>
                        Herramienta de Autonomía de Clientes / Equipo de Data Science
                    </Typography>
                        <img src={tulLogo} alt = "Tul Logo" height="40px"/>
                    </Toolbar>
                </AppBar>

            </Box>
        </div>
    )
}

export default Header
