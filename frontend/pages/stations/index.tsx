import React from "react";
import NavBar from "@/components/NavBar";
import PaginatedStations from "@/components/stations/PaginatedStations";
import { Typography } from "@mui/material";

const Stations = () => {
  return (
    <>
      <NavBar />
      <Typography
        variant="h3"
        component="h2"
        sx={{ mt: 5, ml: 2, fontWeight: 700 }}
      >
        Stationlist
      </Typography>
      <PaginatedStations />
    </>
  );
};

export default Stations;
