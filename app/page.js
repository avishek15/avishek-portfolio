"use client";

import HeroBanner from "@/components/Hero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="h-full overflow-y-clip overflow-x-clip"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.8 }}
    >
      {/* <div className="h-full"> */}
      <HeroBanner />
      {/* </div> */}
    </motion.div>
  );
}
