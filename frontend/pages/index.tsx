import React from "react";
import NavBar from "../components/NavBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PaginatedTrips from "@/components/home/PaginatedTrips";
import OutlinedCard1 from "@/components/home/TotalTripsCard";
import OutlinedCard2 from "@/components/home/DistanceCard"
import OutlinedCard3 from "@/components/home/DurationCard";
import { motion } from "framer-motion";
import HomeMessage from "@/components/home/HomeMessage";

const Home = () => {
  return (
    <>
      <NavBar />
      <HomeMessage/>
      <Grid
        container
        spacing={{ xs: 4, sm: 12 }}
        sx={{ justifyContent: "center", pl: 6, pr: 6, mb:20 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: [100,50,100] }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 1,
            duration:1.5,
          }}
        >
          <Grid item xs={12} sm={4} lg={4}>
            <OutlinedCard1 />
          </Grid>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: [100,50,100] }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 1.6,
            duration: 1.5,
          }}
        >
          <Grid item xs={12} sm={4} lg={4}>
            <OutlinedCard2 />
          </Grid>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: [100,50,100] }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
            delay: 2,
            duration:1.5
          }}
        >
          <Grid item xs={12} sm={4} lg={4}>
            <OutlinedCard3 />
          </Grid>
        </motion.div>
      </Grid>
      <Container>
        <PaginatedTrips />
      </Container>
    </>
  );
};

export default Home;
