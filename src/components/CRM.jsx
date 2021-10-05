import React from 'react'
import {Box, Paper, Typography, TableContainer, Table, TableBody, TableRow, TableCell} from '@material-ui/core'

function createData(name, value) {
    return { name, value };
  }
  
  const rows = [
    createData('Encuestas contestadas', 7),
    createData('Calificaciones de entrega', 9),
    createData('Calificación de la app', 'Verdadero'),
    createData('Puntuacion promedio', '8/10')
  ];

const CRM = () => {
    return (
                <Box style = {{height: "27.5vh"}}>
                    <Typography variant = 'h6' style = {{fontWeight : 600}} sx = {{p:1, pb: 3}}>
                        CRM
                    </Typography>
                    <TableContainer style={{width: "100%", height: "80%" }} >
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
                </Box>
            )
}

export default CRM