"use client";

import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-darkCoffeeStain to-lightCoffeeStain"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-3xl z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl font-bold cursor-default z-40 w-fit h-fit"
          initial={{ opacity: 1, zIndex: 40 }}
          animate={{ opacity: 0, display: "none" }}
          exit={{ opacity: 0, display: "none" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1) ? pathName.substring(1) : "home"}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-3xl bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24 ">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
