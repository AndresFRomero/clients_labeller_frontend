import React from 'react'
import {Box, Grid, Paper, Typography} from '@mui/material'

const Verticals = () => {
    return (
        <Box style = {{height: "20vh"}}>
            <Typography variant = 'h6' style = {{fontWeight : 600}} sx = {{p:1, pb: 4}}>
                Verticales TUL
            </Typography>
            <Grid container spacing={"1vh"}>
                <Grid item sm={4} md={4} xs={12}>
                    <Typography variant = 'body1'>
                            Soats: 13
                    </Typography>
                </Grid>
                <Grid item sm={4} md={4} xs={12}>
                    <Typography variant = 'body1'>
                            Alquiler: 4
                    </Typography>
                </Grid>
                <Grid item sm={4} md={4} xs={12}>
                    <Typography variant = 'body1'>
                            CrediTUL: 0
                    </Typography>
                </Grid>
                <Grid item sm={4} md={4} xs={12}>
                    <Typography variant = 'body1'>
                            TechoTUL: 0
                    </Typography>
                </Grid>
                <Grid item sm={4} md={4} xs={12}>
                    <Typography variant = 'body1'>
                            Keo: 7
                    </Typography>
                </Grid>
                <Grid item sm={4} md={4} xs={12}>
                    <Typography variant = 'body1'>
                            Llaves: 6
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Verticals