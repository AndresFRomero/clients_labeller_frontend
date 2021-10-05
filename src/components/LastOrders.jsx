import React from 'react'
import {Box, Step, Stepper, StepLabel, List, 
        ListItem, ListItemIcon, ListItemText, 
        Typography, TableContainer } from '@mui/material'

// Icons
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import BuildIcon from '@mui/icons-material/Build';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

// import { Class } from '@mui/icons-material';

const LastOrders = () => {

    const steps = [
        {
            elapsed_time: 45,
            amount: 150,
            references: 6,
            categories: 3,
            mix: "35%",
            approach: "Call",
            hour: "09:00 pm",
            cancelled: false
        },
        {
            elapsed_time: 30,
            amount: 150,
            references: 6,
            categories: 3,
            mix: "35%",
            approach: "Call",
            hour: "09:00 pm",
            cancelled: true
        },
        {
            elapsed_time: 25,
            amount: 150,
            references: 6,
            categories: 3,
            mix: "35%",
            approach: "Call",
            hour: "09:00 pm",
            cancelled: false
        },
        {
            elapsed_time: 21,
            amount: 150,
            references: 6,
            categories: 3,
            mix: "35%",
            approach: "Call",
            hour: "09:00 pm",
            cancelled: false
        },
        {
            elapsed_time: 18,
            amount: 150,
            references: 6,
            categories: 3,
            mix: "35%",
            approach: "Call",
            hour: "09:00 pm",
            cancelled: false
        },
        {
            elapsed_time: 15,
            amount: 150,
            references: 6,
            categories: 3,
            mix: "35%",
            approach: "Call",
            hour: "09:00 pm",
            cancelled: true
        },
        {
            elapsed_time: 9,
            amount: 150,
            references: 6,
            categories: 3,
            mix: "35%",
            approach: "Call",
            hour: "09:00 pm",
            cancelled: false
        }
      ];

    return (
        <Box sx={{ width: '100%', height: "32.5vh" }}>
            1. Informacion de las ultimas ordenes
            <TableContainer sx = {{ overflowX: 'auto', overflowY: 'auto', pb: 2}}>
            <Stepper activeStep={10} alternativeLabel>
                {steps.map((dict) => (
                <Step key={dict.elapsed_time}>
                    <StepLabel error={dict.cancelled}>
                        <Typography style={{ fontWeight: 600 }} variant="body2" component="h6">  
                            - {dict.elapsed_time} days
                        </Typography>  
                        <Box sx = {{ border: '1px dashed grey' }}>
                            <List dense = {true}>
                                <ListItem>
                                    <ListItemIcon>
                                        <MonetizationOnOutlinedIcon/> 
                                    </ListItemIcon>
                                    <ListItemText style={{whiteSpace: "nowrap"}}>
                                        {dict.amount} USD
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CategoryOutlinedIcon/> 
                                    </ListItemIcon>
                                    <ListItemText style={{whiteSpace: "nowrap"}}>
                                        {dict.references} Skus
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ClassOutlinedIcon/> 
                                    </ListItemIcon>
                                    <ListItemText style={{whiteSpace: "nowrap"}}>
                                        {dict.categories} Cats
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <BuildIcon/> 
                                    </ListItemIcon>
                                    <ListItemText style={{whiteSpace: "nowrap"}}>
                                        {dict.mix} Mix
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <AccessTimeOutlinedIcon/> 
                                    </ListItemIcon>
                                    <ListItemText style={{whiteSpace: "nowrap"}}>
                                        {dict.hour}
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Box>
                    </StepLabel>
                </Step>
                ))}
            </Stepper>
            </TableContainer>
        </Box>
    )
}

export default LastOrders
