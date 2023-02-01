import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

const HomeMessage = () => {
  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0, y: -200 }}
          animate={{ scale: 0.8, opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 20,
          }}
        >
          <Typography
            variant="h1"
            color="#e21f25"
            sx={{
              fontSize: { xs: 35, sm: 55, md: 60, lg: 75 },
              fontWeight: 700,
            }}
          >
            Welcome to Bike App
          </Typography>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 0.8, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 80,
            delay: 2.0,
          }}
        >
          <Typography
            variant="h6"
            color="#e21f25"
            sx={{
              fontSize: { xs: 20, sm: 35, md: 40, lg: 55 },
            }}
          >
            In this app you can look data from 2021{" "}
          </Typography>
        </motion.div>
      </Box>
    </>
  );
};

export default HomeMessage;
