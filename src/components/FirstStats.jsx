import React from 'react'
import {Box, TableContainer, Table, TableHead, 
        TableRow, TableCell, TableBody, Paper, Grid,
        Typography} from '@mui/material'

function createData(name, value) {
    return { name, value };
  }
  
  const rows = [
    createData('Registro', 'Autoregistro'),
    createData('Tiene foto de fachada', 'Verdadero'),
    createData('Tipología de cliente', 'Pinturero'),
    createData('Dispositivo', 'Android'),
    createData('Gamma', 'Media'),
    createData('Edad', 48),
    createData('Tiene Hunter', 'Verdadero'),
    createData('Tiempo en hacer la 1era compra', '12 días'),
    createData('Valor Primera Orden', '$ 578.12 USD'),
    createData('Categorias', '5 distintas'),
    createData('Mix', "21%"),

  ];

const FirstStats = () => {
    return (
        <Box style = {{ height: "20vh" }}>
            <Typography variant = 'h6' style = {{fontWeight : 600}} sx = {{p:1, pb: 2}}>
                Datos de registro y primera compra
            </Typography>
                <TableContainer style={{width: "100%", height: "60%" }}>
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
