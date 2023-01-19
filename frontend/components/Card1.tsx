import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 16 }} color='#BAFF39' gutterBottom>
        Total trips
      </Typography>
      <Typography variant="h4" component="div">
        3126466
      </Typography>
      <Typography sx={{ fontSize: 16 }} color='#BAFF39' gutterBottom>
        Between May - July 2021
      </Typography>
      <Typography variant="h4" component="div">
        Later
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{backgroundColor:'#6E6E6E', border:1, borderRadius:5, boxShadow:10, maxWidth:350,color:'#BAFF39'}} >{card}</Card>
    </Box>
  );
}