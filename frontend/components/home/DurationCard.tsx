import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";



export default function OutlinedCard() {

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count,  56888934, { duration: 10 });

    return animation.stop;
  }, []);


  
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{backgroundColor:'#6E6E6E', border:1, borderRadius:5, boxShadow:10, maxWidth:350,color:'#BAFF39'}} >
      <CardContent>
      <Typography sx={{ fontSize: 18 }} color='#BAFF39' gutterBottom>
        Combined time spend cycling
      </Typography>
      <Typography variant="h4" component="div">
        <motion.div
          initial={{ scale: 0, opacity: 0}}
          animate={{ scale: 1, opacity: 1}}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
            delay: 2.0,
          }}
          >{rounded}</motion.div>
      </Typography>
      <Typography sx={{ fontSize: 16 }} color='#BAFF39' gutterBottom>
        Average lenght of trip
      </Typography>
      <Typography variant="h4" component="div">
      18 min
      </Typography>
    </CardContent> 
      </Card>
    </Box>
  );
}