import React from 'react'
import {Box, Paper, Typography, TableContainer, TableCell, TableRow, Table, TableBody} from '@mui/material'

function createData(name, value) {
    return { name, value };
  }
  
  const rows = [
    createData('Tiempo de vida', '163 días'),
    createData('Total Dinero', '$ 6,129.3 USD'),
    createData('Total Ordenes', 32),
    createData('Ordenes Canceladas', 6),
    createData('Ordenes Rechazadas', 2),
    createData('Descuentos aplicados', '$ 58 USD'),
    createData('Tul creditos acumulados', '$ 184 USD'),
    createData('Tul creditos expirados', '$ 31 USD'),
    createData('Tul creditos redimidos', '$ 88 USD'),
    createData('Frecuencia de pedido', '3.2 pedidos al mes'),
    createData('Skus distintos', 21),
    createData('Categorias distintas', 2),
    createData('Mix acumulado', "12%")
  ];

const AcumStats = () => {
    return (
        <Box style = {{height: "32.5vh"}}>
            <Typography variant = 'h6' style = {{fontWeight : 600}} sx = {{p:1, pb: 3}}>
                Datos Acumulativos
            </Typography>
            <TableContainer style={{width: "100%", height: "80%" }}>
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

export default AcumStats
