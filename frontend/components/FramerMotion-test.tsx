import * as React from "react";
import { motion } from "framer-motion";

export const AnimatedExample = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ rotate: 180, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
  />
);