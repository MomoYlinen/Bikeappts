import React from 'react'
import NavBar from '@/components/NavBar'
import PaginatedStations from '@/components/stations/PaginatedStations'
import { Typography } from '@mui/material'

const Stations = () => {
  return (
    <>
    <NavBar/>
    <Typography variant="h4" component="h2" sx={{mt:5,ml:2}}>
      Stationlist
    </Typography>
    <PaginatedStations/>
    </>
  )
}

export default Stations