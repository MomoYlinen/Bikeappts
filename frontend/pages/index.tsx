import React from 'react'
import NavBar from '../components/NavBar'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import PaginatedTrips from '@/components/PaginatedTrips';
import { Typography } from '@mui/material';







const Home = () => {
  return (
    <>
      <NavBar/>
      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center',mt:5}}>
      <Typography variant='h1' sx={{fontSize:{xs:30,sm:70}, fontWeight:700}}>Welcome to Bike App </Typography>
      <Typography variant='h6'sx={{fontSize:{xs:20,sm:50}}}>In this app you can look data from 2021 </Typography>
      </Box>
      <Container>
      <PaginatedTrips/>
      </Container>
    </>
  )
}

export default Home
