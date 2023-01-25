import React from "react";
import NavBar from "@/components/NavBar";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { InferGetStaticPropsType } from "next";
import InfoCard from "@/components/station/InfoCard";
import TopStationsCard from "@/components/station/TopStationsCard";
import Container from "@mui/material/Container";
import Maps from "@/components/station/Maps";
import Box from "@mui/material/Box";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8080/stations?size=457");
  const data = await res.json();

  const paths = data.data.map((station: any) => {
    return {
      params: { id: station.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

const Station = ({
  station,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 2, justifyContent: "center" }}>
        <Grid maxWidth="xl">
          <Grid
            container
            sx={{
              mb: { xs: 25, sm: 20, md: 20 },
              display: "flex",
              alignItems: "center",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "center",
              },
            }}
            rowGap={6}
            columnGap={10}
          >
            <Grid item sx={{ justifyContent: "center", mr: { xs: 5, sm: 0 } }}>
              <Typography
                sx={{ fontSize: { xs: 46, sm: 70 }, fontWeight: 500, mb: 2 }}
              >
                {station.details.nimi}
              </Typography>
              <InfoCard
                name={station.details.name}
                osoite={station.details.osoite}
                totaltripsstarted={station.totalTripsStarted}
                totaltripsended={station.totalTripsEnded}
                averagedistancestart={Math.round(
                  station.AverageDistanceStart.Start
                )}
                averagedistanceend={Math.round(station.AverageDistanceEnd.End)}
              />
            </Grid>
            <Grid item>
              <Box
                sx={{
                  maxWidth: { xs: 350, sm: 600, md: 390, lg: 500 },
                  maxHeight: { xs: 350, sm: 400, md: 390, lg: 400 },
                  display: "flex",
                  mt: { sm: 0, md: 0, lg: 2 },
                  ml: { xs: 0, sm: 0, md: 0, lg: 15 },
                }}
              >
                <Maps lat={station.details.y} lng={station.details.x} />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            columnGap={4}
            rowGap={2}
            maxWidth="xl"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "space-evenly",
              },
            }}
          >
            <Grid>
              <TopStationsCard
                topstations={station.topDepartureStations}
                title={"Top 5 Destinations"}
              />
            </Grid>
            <Grid>
              <TopStationsCard
                topstations={station.topReturnStations}
                title={"Top 5 Start Stations"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;

  const res = await fetch(`http://localhost:8080/stations/details/${id}`);
  const data = await res.json();

  return {
    props: {
      station: data,
    },
  };
};

export default Station;
