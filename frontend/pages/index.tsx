import React from "react";
import NavBar from "../components/NavBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PaginatedTrips from "@/components/home/PaginatedTrips";
import OutlinedCard1 from "@/components/home/TotalTripsCard";
import OutlinedCard2 from "@/components/home/DistanceCard";
import OutlinedCard3 from "@/components/home/DurationCard";
import { motion } from "framer-motion";
import HomeMessage from "@/components/home/HomeMessage";
import { CardMedia } from "@mui/material";

const Home = () => {
  return (
    <>
      <NavBar />
      <CardMedia
        component="div"
        image="/kaupunkipyorat.jpeg"
        sx={{
          backgroundSize: "cover",
          height: { xs: "85vh", sm: "93vh", md: "91vh", xl: "95vh" },
          display: "flex",
          mb: { xs: 20, sm: 0, md: 0, lg: 0 },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            display: "flex",
            mt: { xs: 2, sm: 2 },
          }}
        >
          <Grid item>
            <HomeMessage />
          </Grid>
          <Grid item sx={{ justifyContent: "center" }}>
            <Grid
              container
              maxWidth="xl"
              columnGap={3}
              rowGap={6}
              sx={{
                justifyContent: {
                  xs: "center",
                  sm: "center",
                },
                alignItems: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: [1, 1.2, 1] }}
                transition={{
                  type: "spring",
                  stiffness: 800,
                  damping: 30,
                  delay: 1,
                  duration: 1,
                }}
              >
                <Grid item>
                  <OutlinedCard2 />
                </Grid>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: [1, 1.2, 1] }}
                transition={{
                  type: "spring",
                  stiffness: 800,
                  damping: 30,
                  delay: 2,
                  duration: 1,
                }}
              >
                <Grid item>
                  <OutlinedCard1 />
                </Grid>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: [1, 1.2, 1] }}
                transition={{
                  type: "spring",
                  stiffness: 800,
                  damping: 30,
                  delay: 3,
                  duration: 1,
                }}
              >
                <Grid item>
                  <OutlinedCard3 />
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </CardMedia>
      <Container>
        <PaginatedTrips />
      </Container>
    </>
  );
};

export default Home;
