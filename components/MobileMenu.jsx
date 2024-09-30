"use client";
import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";

const MobileMenu = ({ menu_items }) => {
  const [isOpen, setIsopen] = useState(false);

  const topVariant = {
    closed: {
      rotate: 0,
      transition: { duration: 0.3 }, // Optional: specify transition duration
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
      transition: { duration: 0.3 }, // Optional: specify transition duration
    },
  };

  const middleVariant = {
    closed: {
      opacity: 1,
      transition: { duration: 0.3 }, // Optional: specify transition duration
    },
    opened: {
      opacity: 0,
      transition: { duration: 0.3 }, // Optional: specify transition duration
    },
  };

  const bottomVariant = {
    closed: {
      rotate: 0,
      transition: { duration: 0.3 }, // Optional: specify transition duration
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
      transition: { duration: 0.3 }, // Optional: specify transition duration
    },
  };

  const listVariant = {
    closed: {
      x: "100vw",
      transition: { duration: 0.3, ease: "easeOut" }, // Ease out for exit animation
    },
    opened: {
      x: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.5 },
    },
  };
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    // MOBILE MENU
    <>
      <button
        className="w-10 h-8 flex flex-col justify-between z-50 relative"
        onClick={() => setIsopen((prev) => !prev)}
      >
        <motion.div
          variants={topVariant}
          initial="closed"
          animate={isOpen ? "opened" : "closed"}
          className="w-10 h-1 bg-black rounded origin-left"
        ></motion.div>
        <motion.div
          variants={middleVariant}
          initial="closed"
          animate={isOpen ? "opened" : "closed"}
          className="w-10 h-1 bg-black rounded"
        ></motion.div>
        <motion.div
          variants={bottomVariant}
          initial="closed"
          animate={isOpen ? "opened" : "closed"}
          className="w-10 h-1 bg-black rounded origin-left"
        ></motion.div>
      </button>
      {isOpen && (
        <motion.div
          className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          variants={listVariant}
          initial="closed"
          animate={isOpen ? "opened" : "closed"}
        >
          {menu_items.map((link) => (
            <motion.div
              key={link.title}
              variants={listItemVariants}
              className="bg-slate-950 z-50"
            >
              <Link href={link.url}>{link.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default MobileMenu;
