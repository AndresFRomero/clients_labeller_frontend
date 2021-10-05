import React from 'react'
import {Box, TableContainer,StepIcon, Stepper, StepLabel,
        Step, Typography} from '@mui/material'

import CallIcon from '@mui/icons-material/Call';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

const LastApproaches = () => {
    const steps = [
        {   
            elapsed_time: 47,
            time: 45,
            hour: "07:24 am",
            approach: "Call"
        },
        {   
            elapsed_time: 23,
            time: 45,
            hour: "07:24 am",
            approach: "Call"
        },
        {   
            elapsed_time: 18,
            time: 45,
            hour: "07:24 am",
            approach: "Visit"
        },
        {   
            elapsed_time: 12,
            time: 45,
            hour: "07:24 am",
            approach: "Call"
        },
        {   
            elapsed_time: 11,
            time: 45,
            hour: "07:24 am",
            approach: "Visit"
        },
        {   
            elapsed_time: 10,
            time: 45,
            hour: "07:24 am",
            approach: "Call"
        },
        {   
            elapsed_time: 9,
            time: 45,
            hour: "07:24 am",
            approach: "Call"
        },
        {   
            elapsed_time: 8,
            time: 45,
            hour: "07:24 am",
            approach: "Call"
        },
        {   
            elapsed_time: 2,
            time: 45,
            hour: "07:24 am",
            approach: "Visit"
        },
        {   
            elapsed_time: 1.7,
            time: 45,
            hour: "07:24 am",
            approach: "Visit"
        },
        {   
            elapsed_time: 2,
            time: 45,
            hour: "07:24 am",
            approach: "Visit"
        },
        {   
            elapsed_time: 4,
            time: 45,
            hour: "07:24 am",
            approach: "Visit"
        },
        {   
            elapsed_time: 5,
            time: 45,
            hour: "07:24 am",
            approach: "Visit"
        },
        {   
            elapsed_time: 6,
            time: 45,
            hour: "07:24 am",
            approach: "Call"
        },
        {   
            elapsed_time: 14,
            time: 45,
            hour: "07:24 am",
            approach: "Visit"
        },
        {   
            elapsed_time: 0.5,
            time: 45,
            hour: "07:24 am",
            approach: "Visit"
        }
      ];

    return (
        <Box sx={{ width: '100%', height: "27.5vh" }}>
            Informacion de las ultimas visitas
            <TableContainer sx = {{ overflowX: 'auto', overflowY: 'auto', pb: 6, pt: 7}}>
            <Stepper activeStep={20}  alternativeLabel>
                {steps.map((dict) => (
                <Step key={dict.elapsed_time} sx = {{ pr: 4, pl: 4 }}>
                    <StepLabel StepIconComponent={dict.approach === "Call" ? CallIcon:HomeWorkIcon}>
                        <Typography style={{ fontWeight: 600 }} variant="body2" component="h6">  
                            - {dict.elapsed_time} days
                        </Typography>  
                            <Typography style={{whiteSpace: "nowrap"}} variant = "body2">
                                {dict.time} min
                            </Typography>
                    </StepLabel>
                </Step>
                ))}
            </Stepper>
            </TableContainer>
        </Box>
    )
}

export default LastApproaches
