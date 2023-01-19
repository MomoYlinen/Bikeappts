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
    const animation = animate(count, 7967828, { duration: 10 });

    return animation.stop;
  }, []);


  
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{backgroundColor:'#6E6E6E', border:1, borderRadius:5, boxShadow:10, maxWidth:350,color:'#BAFF39'}} >
      <CardContent>
      <Typography sx={{ fontSize: 20 }} color='#BAFF39' gutterBottom>
        Kilometers traveled
      </Typography>
      <Typography variant="h4" component="div" sx={{display:'flex', flexDirection:'column'}}>
        <motion.div
          initial={{ scale: 0, opacity: 0}}
          animate={{ scale: 1, opacity: 1}}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
            delay: 1.6,
          }}
          >{rounded}</motion.div>
      </Typography>
      <Typography sx={{ fontSize: 15 }} color='#BAFF39' gutterBottom>
       Average distance travelled Per Trip
      </Typography>
      <Typography variant="h4" component="div">
      2,54 Km
      </Typography>
    </CardContent> 
      </Card>
    </Box>
  );
}