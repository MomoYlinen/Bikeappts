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
        Total distance
      </Typography>
      <Typography variant="h4" component="div">
        7967828 Km
      </Typography>
      <Typography sx={{ fontSize: 16 }} color='#BAFF39' gutterBottom>
        Average Distance/Per Trip
      </Typography>
      <Typography variant="h4" component="div">
        2,54 Km
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