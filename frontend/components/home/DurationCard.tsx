import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function OutlinedCard() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 56888934, { duration: 10 });

    return animation.stop;
  }, []);

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#6E6E6E",
          border: 1,
          borderRadius: 3,
          boxShadow: 10,
          color: "#BAFF39",
          width: { xs: 300, sm: 200, md: 300, lg: 350 },
          height: { xs: 150, sm: 120, md: 170, lg: 200 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 12, md: 20, lg: 22 },
              fontWeight: 500,
            }}
            color="#BAFF39"
          >
            Total time (Min)
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 12, md: 20, lg: 24 },
              fontWeight: 300,
            }}
            gutterBottom
            component="div"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
                delay: 2.0,
              }}
            >
              {rounded}
            </motion.div>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 12, md: 20, lg: 22 },
              fontWeight: 500,
            }}
            color="#BAFF39"
          >
            AVG lenght of trip
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 12, md: 20, lg: 30 },
              fontWeight: 300,
            }}
            component="div"
          >
            18 min
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
