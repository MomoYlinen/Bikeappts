import React from "react";
import NavBar from "@/components/NavBar";
import PaginatedStations from "@/components/stations/PaginatedStations";
import { Typography } from "@mui/material";

const Stations = () => {
  return (
    <>
      <NavBar />
      <Typography
        variant="h2"
        component="h2"
        color="#e21f25"
        fontFamily="Combo"
        sx={{ mt: 5, ml: 10, fontWeight: 700 }}
      >
        Stationlist
      </Typography>
      <PaginatedStations />
    </>
  );
};

export default Stations;
