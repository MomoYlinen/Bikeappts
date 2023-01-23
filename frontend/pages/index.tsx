import React from "react";
import NavBar from "../components/NavBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PaginatedTrips from "@/components/PaginatedTrips";
import { Typography } from "@mui/material";
import OutlinedCard1 from "@/components/Card1";
import OutlinedCard2 from "@/components/Card2";
import OutlinedCard3 from "@/components/Card3";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
          mb: 1,
        }}
      >
      <motion.div
          initial={{ scale: 0, opacity: 0, y: -200 }}
          animate={{ scale: 0.8, opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 20,
          }}>
        <Typography
          variant="h1"
          color="#000000"
          sx={{ fontSize: { xs: 35, sm: 70 }, fontWeight: 700 }}
        >
          Welcome to Bike App{" "}
        </Typography>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0}}
          animate={{ scale: 0.8, opacity: 1}}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 80,
            delay:2.0
          }}>
        <Typography
          variant="h6"
          color="#000000"
          sx={{ fontSize: { xs: 20, sm: 50 } }}
        >
          In this app you can look data from 2021{" "}
        </Typography>
        </motion.div>
      </Box>
      <Grid
        container
        spacing={{ xs: 4, sm: 12 }}
        sx={{ justifyContent: "center", pl: 6, pr: 6, mb:20 }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0, y: -200 }}
          animate={{ scale: [0, 1.5, 0.8], opacity: 1, y: [100,50,100] }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 1,
            duration:1.5,
          }}
        >
          <Grid item xs={12} sm={4} lg={3}>
            <OutlinedCard1 />
          </Grid>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0, y: -200 }}
          animate={{ scale: [0, 1.5, 0.8], opacity: 1, y: [100,50,100] }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 1.6,
            duration: 1.5,
          }}
        >
          <Grid item xs={12} sm={4} lg={3}>
            <OutlinedCard2 />
          </Grid>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0, y: -200 }}
          animate={{ scale: [0, 1.5, 0.8], opacity: 1, y: [100,50,100] }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
            delay: 2,
            duration:1.5
          }}
        >
          <Grid item xs={12} sm={4} lg={3}>
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
