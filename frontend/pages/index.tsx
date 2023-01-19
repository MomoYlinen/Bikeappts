import React from 'react'
import NavBar from '../components/NavBar'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import PaginatedTrips from '@/components/PaginatedTrips';
import { Typography } from '@mui/material';
import OutlinedCard1 from '@/components/Card1';
import OutlinedCard2 from '@/components/Card2';
import OutlinedCard3 from '@/components/Card3';






const Home = () => {
  return (
    <>
      <NavBar/>
      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center',mt:5, mb:5}}>
      <Typography variant='h1' color='#000000' sx={{fontSize:{xs:30,sm:70}, fontWeight:700}}>Welcome to Bike App </Typography>
      <Typography variant='h6'color='#000000' sx={{fontSize:{xs:20,sm:50}}}>In this app you can look data from 2021 </Typography>
      </Box>
      <Grid container spacing={{xs:4, sm:10}} sx={{justifyContent:'center', pl:6, pr:6}}>
        <Grid item xs={12} sm={4} lg={3}>
        <OutlinedCard1/>
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
        <OutlinedCard2/>
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
        <OutlinedCard3/>
        </Grid>
      </Grid>
      <Container>
      <PaginatedTrips/>
      </Container>
    </>
  )
}

export default Home
