import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function OutlinedCard(props:any) {


  
  return (
    <Box sx={{ maxWidth:{xs:300,sm:400}}}>
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "#6E6E6E",
        border: 1,
        borderRadius: 5,
        boxShadow: 10,
        maxWidth: 350,
        color: "#BAFF39",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 35,fontWeight:700 }}
          color="#BAFF39"
          gutterBottom
        >
          {props.name}
        </Typography>
        <Typography
          sx={{ fontSize: 16, fontWeight: 700 }}
          color="#BAFF39"
          gutterBottom
        >
          Osoite
        </Typography>
        <Typography sx={{ fontSize: 25 }} component="div">
          {props.osoite}
        </Typography>
        <Typography
          sx={{ fontSize: 16, fontWeight: 700 }}
          color="#BAFF39"
          gutterBottom
        >
          Kapasiteetti
        </Typography>
        <Typography
          sx={{ fontSize: 20 }}
          color="#BAFF39"
          gutterBottom
        >
          {props.kapasiteet}
        </Typography>
        <Typography
          sx={{ fontSize: 16, fontWeight: 700 }}
          color="#BAFF39"
          gutterBottom
        >
          Total number of journeys starting from the props
        </Typography>
        <Typography
          sx={{ fontSize: 20}}
          color="#BAFF39"
          gutterBottom
        >
          {props.totaltripsstarted}
        </Typography>
        <Typography
          sx={{ fontSize: 16, fontWeight: 700 }}
          color="#BAFF39"
          gutterBottom
        >
          Total number of journeys starting from the props
        </Typography>
        <Typography
          sx={{ fontSize: 20}}
          color="#BAFF39"
          gutterBottom
        >
          {props.totaltripsended}
        </Typography>
        <Typography
          sx={{ fontSize: 16, fontWeight: 700 }}
          color="#BAFF39"
          gutterBottom
        >
          The average distance of a journey starting from the props
        </Typography>
        <Typography
          sx={{ fontSize: 20}}
          color="#BAFF39"
          gutterBottom
        >
          {props.averagedistancestart} m
        </Typography>
        <Typography
          sx={{ fontSize: 16, fontWeight: 700 }}
          color="#BAFF39"
          gutterBottom
        >
          The average distance of a journey ending at the props
        </Typography>
        <Typography
          sx={{ fontSize: 20}}
          color="#BAFF39"
          gutterBottom
        >
          {props.averagedistanceend} m
        </Typography>
      </CardContent>
    </Card>
  </Box>
  );
}