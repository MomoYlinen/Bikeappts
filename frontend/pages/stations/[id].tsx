import React from "react";
import NavBar from "@/components/NavBar";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { InferGetStaticPropsType } from "next";
import InfoCard from "@/components/station/InfoCard";
import { Details } from "@mui/icons-material";
import TopStationsCard from "@/components/station/TopStationsCard";
import Container from "@mui/material/Container";

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
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container>
          <Grid
            container
            sx={{
              mb: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item>
              <InfoCard
                name={station.details.name}
                osoite={station.details.osoite}
                kapasiteet={station.details.kapasiteet}
                totaltripsstarted={station.totalTripsStarted}
                totaltripsended={station.totalTripsEnded}
                averagedistancestart={Math.round(
                  station.AverageDistanceStart.Start
                )}
                averagedistanceend={Math.round(station.AverageDistanceEnd.End)}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={10}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item md={12} lg={6}>
              <TopStationsCard topstations={station.topDepartureStations} />
            </Grid>
            <Grid item md={12} lg={6}>
              <TopStationsCard topstations={station.topDepartureStations} />
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
