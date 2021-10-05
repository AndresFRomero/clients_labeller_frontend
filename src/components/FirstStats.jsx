import React from 'react'
import {Box, TableContainer, Table, TableHead, 
        TableRow, TableCell, TableBody, Paper, Grid,
        Typography} from '@mui/material'

function createData(name, value) {
    return { name, value };
  }
  
  const rows = [
    createData('Registro', 'Autoregistro'),
    createData('Dispositivo', 'Android'),
    createData('Gamma', 'Media'),
    createData('Edad', 48),
    createData('Tiene Hunter', 'Verdadero'),
    createData('Tiempo de 1er Compra', '12 días'),
    createData('Valor Primera Orden', '$ 578.12 USD'),
    createData('Categorias', '5 distintas'),
    createData('Mix', "20%")
  ];

const FirstStats = () => {
    return (
        <Box style = {{ height: "20vh" }}>
            <Typography style={{textAlign:'left', fontWeight: 600}} sx = {{pb:2}}>
                Dato de registro y primera compra del cliente
            </Typography>
                <TableContainer style={{width: "100%", height: "80%" }} component={Paper}>
                    <Table  size="small" aria-label="a dense table">
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.value}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            {/* </Grid> */}
        </Box>
    )
}

export default FirstStats
