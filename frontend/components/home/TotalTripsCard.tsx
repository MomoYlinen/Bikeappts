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
    const animation = animate(count, 3126466, { duration: 10 });

    return animation.stop;
  }, []);

  return (
    <Box sx={{ minWidth: 200 }}>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#333",
          border: 1,
          borderColor: "#fcbc19",
          borderRadius: 3,
          boxShadow: 10,
          width: { xs: 300, sm: 200, md: 300, lg: 350 },
          height: { xs: 150, sm: 120, md: 170, lg: 200 },
          color: "#fcbc19",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 12, md: 20, lg: 24 },
              fontWeight: 500,
              textAlign: "center",
            }}
            color="primary"
            gutterBottom
          >
            Total Journeys Made
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 14, md: 22, lg: 30 },
              fontWeight: 300,
              textAlign: "center",
            }}
            component="div"
            gutterBottom
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 20,
                delay: 2.1,
              }}
            >
              {rounded}
            </motion.div>
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 16, sm: 12, md: 24 }, textAlign: "center" }}
            color="primary"
          >
            Between May - July 2021
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
