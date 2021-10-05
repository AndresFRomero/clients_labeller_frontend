import React from 'react'
import {Box, Paper, Typography, TableContainer, Table, TableBody, TableRow, TableCell} from '@material-ui/core'

function createData(name, value) {
    return { name, value };
  }
  
  const rows = [
    createData('Logins', 423),
    createData('Logins/semana', 15),
    createData('Revisión de banners', 54),
    createData('Revisión de carritos', 21),
    createData('Revisión de verticales', 5),
    createData('Detalle de productos', 177),
    createData('Tiempo promedio de sesión', '6.3 min'),
    createData('# de eventos para ordenar', 32),
    createData('Horario usual de la sesión', '09:00 am - 11:30 am'),
    createData('Revisión de push notification', '12%'),
    createData('Revisión de metodos de pago', 7),
    createData('Revisión de perfil', 1),
  ];

const EventStats = () => {
    return (
                <Box style = {{height: "56.25vh"}}>
                    <Typography variant = 'h6' style = {{fontWeight : 600}} sx = {{p:1, pb: 3}}>
                        Eventos dentro de la app
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

export default EventStats