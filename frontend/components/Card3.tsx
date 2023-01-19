import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 16 }} color='#BAFF39' gutterBottom>
        Total time travelled
      </Typography>
      <Typography variant="h4" component="div">
        56888934 min
      </Typography>
      <Typography sx={{ fontSize: 16 }} color='#BAFF39' gutterBottom>
        Average time travelled
      </Typography>
      <Typography variant="h4">
        18 min
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