import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function OutlinedCard(props: any) {
  const topstations = props.topstations;

  return (
    <Box sx={{ maxWidth: { xs: 300, sm: 450, md: 700, lg: 550 }, mb: 5 }}>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#6E6E6E",
          border: 1,
          borderRadius: 3,
          boxShadow: 10,
          color: "#BAFF39",
          minWidth: { xs: 350, sm: 400, md: 700, lg: 550 },
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 35 }} color="#BAFF39" gutterBottom>
            Top 5 Destinations
          </Typography>
          {topstations?.map((top: any) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                mr: { xs: 10, sm: 12 },
              }}
            >
              <Typography
                sx={{ fontSize: 24, fontWeight: 300 }}
                color="#BAFF39"
                gutterBottom
              >
                {top.trips_returnstation}
              </Typography>
              <Typography
                sx={{ fontSize: 24, fontWeight: 300 }}
                color="#BAFF39"
                gutterBottom
              >
                {top.count}
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}
