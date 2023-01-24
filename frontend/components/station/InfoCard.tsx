import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function OutlinedCard(props: any) {
  return (
    <Box sx={{ maxWidth: { xs: 300, sm: 400 } }}>
      <Card
        variant="elevation"
        sx={{
          backgroundColor: "#6E6E6E",
          border: 1,
          borderRadius: 2,
          boxShadow: 10,
          color: "#BAFF39",
          minWidth: { xs: 350, sm: 400 },
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 30, fontWeight: 500 }}
            color="#BAFF39"
            gutterBottom
          >
            Osoite
          </Typography>
          <Typography sx={{ fontSize: 30, fontWeight: 300, mb: 5 }}>
            {props.osoite}
          </Typography>
          <Typography
            sx={{ fontSize: 20, fontWeight: 500, mb: 2 }}
            color="#BAFF39"
          >
            {`Journeys that started from ${props.name}`}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mb: 2,
              mr: { xs: 10, sm: 15 },
            }}
          >
            <Typography sx={{ fontSize: 24, fontWeight: 500 }} color="#BAFF39">
              Total Trips
            </Typography>
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 300,
                mb: 2,
              }}
              color="#BAFF39"
            >
              {props.totaltripsstarted}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mb: 2,
              mr: { xs: 10, sm: 12 },
            }}
          >
            <Typography sx={{ fontSize: 24, fontWeight: 500 }} color="#BAFF39">
              AVG Distance
            </Typography>
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 300,
                mb: 2,
              }}
              color="#BAFF39"
            >
              {`${props.averagedistancestart} m`}
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: 20, fontWeight: 500, mb: 2 }}
            color="#BAFF39"
          >
            {`Journeys that ended to ${props.name}`}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mb: 2,
              mr: { xs: 10, sm: 15 },
            }}
          >
            <Typography sx={{ fontSize: 24, fontWeight: 500 }} color="#BAFF39">
              Total Trips
            </Typography>
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 300,
                mb: 2,
              }}
              color="#BAFF39"
            >
              {props.totaltripsended}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mr: { xs: 10, sm: 12 },
            }}
          >
            <Typography sx={{ fontSize: 24, fontWeight: 500 }} color="#BAFF39">
              AVG Distance
            </Typography>
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 300,
              }}
              color="#BAFF39"
            >
              {`${props.averagedistanceend} m`}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
