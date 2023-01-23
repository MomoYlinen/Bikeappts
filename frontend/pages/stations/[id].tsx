import React from "react";
import NavBar from "@/components/NavBar";
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { InferGetStaticPropsType } from 'next'


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

const Station = ({ station }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NavBar />
      <Grid container spacing={3} sx={{ m: 5, maxWidth:300, display:'flex', justifyContent:'center' }}>
        <Grid container spacing={3} sx={{display:'flex'}}>
          <Grid item sx={{display:'flex',justifyContent:'center', alignItems:'center'}}>
            <Box sx={{ minWidth: 300}}>
              <Card
                variant="outlined"
                sx={{
                  backgroundColor: "#6E6E6E",
                  border: 1,
                  borderRadius: 5,
                  boxShadow: 10,
                  maxWidth: 350,
                  color: "#BAFF39",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 25 }}
                    color="#BAFF39"
                    gutterBottom
                  >
                    {station.name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 16, fontWeight: 700 }}
                    color="#BAFF39"
                    gutterBottom
                  >
                    Osoite
                  </Typography>
                  <Typography sx={{ fontSize: 25 }} component="div">
                    {station.osoite}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 16, fontWeight: 700 }}
                    color="#BAFF39"
                    gutterBottom
                  >
                    Kapasiteetti
                  </Typography>
                  <Typography
                    sx={{ fontSize: 20 }}
                    color="#BAFF39"
                    gutterBottom
                  >
                    {station.kapasiteet}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;

  const res = await fetch(`http://localhost:8080/stations/${id}`);
  const data = await res.json();

  return {
    props: {
      station: data,
    },
  };
};

export default Station;
