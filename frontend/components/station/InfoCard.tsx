import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function OutlinedCard(props:any) {


  
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{backgroundColor:'#6E6E6E', border:1, borderRadius:5, boxShadow:10, maxWidth:350,color:'#BAFF39'}} >
      <CardContent>
      <Typography sx={{ fontSize: 20 }} color='#BAFF39' gutterBottom>
        {props.StationName}
      </Typography>
      <Typography sx={{ fontSize: 16, fontWeight:700 }} color='#BAFF39' gutterBottom>
        Osoite
      </Typography>
      <Typography variant="h4" component="div">
      {props.stationAdress}
      </Typography>
      <Typography sx={{ fontSize: 16, fontWeight:700 }} color='#BAFF39' gutterBottom>
        Kapasiteetti
      </Typography>
      <Typography sx={{ fontSize: 20 }} color='#BAFF39' gutterBottom>
        {props.kapasiteet}
      </Typography>
    </CardContent> 
      </Card>
    </Box>
  );
}