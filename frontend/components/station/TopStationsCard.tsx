import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function OutlinedCard(props:any) {

    const topstations = props.topstations


  
  return (
    <Box>
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "#6E6E6E",
        border: 1,
        borderRadius: 5,
        boxShadow: 10,
        color: "#BAFF39",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 35 }}
          color="#BAFF39"
          gutterBottom
        >
          Top 5 departure stations
        </Typography>
        {topstations?.map((top:any) => (
            <Typography
            sx={{ fontSize: 20, fontWeight: 500 }}
            color="#BAFF39"
            gutterBottom
            >
                {`${top.trips_returnstation} ${top.count}`}
            </Typography>
      ))}
      </CardContent>
    </Card>
  </Box>
  );
}