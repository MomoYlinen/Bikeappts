import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function OutlinedCard(props: any) {
  const topstations = props.topstations;

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 500, md: 400, lg: 550 }, mb: 5 }}>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#333",
          border: 1,
          borderRadius: 3,
          boxShadow: 10,
          color: "#fcbc19",
          minWidth: { xs: 320, sm: 500, md: 400, lg: 550 },
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 35, borderBottom: 2, mb: 2 }}
            color="#fcbc19"
            gutterBottom
          >
            {props.title}
          </Typography>
          {topstations?.map((top: any) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                mr: { xs: 10, sm: 12 },
              }}
              key={top.count}
            >
              <Typography
                sx={{ fontSize: 24, fontWeight: 300 }}
                color="#fcbc19"
                gutterBottom
              >
                {top.name}
              </Typography>
              <Typography
                sx={{ fontSize: 24, fontWeight: 300 }}
                color="#fcbc19"
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
