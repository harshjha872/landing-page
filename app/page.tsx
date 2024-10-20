"use client";
import React from "react";

import { motion } from "framer-motion";
import HeroSection from "./components/Hero";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

export default function Home() {
  // Container variants for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
        delayChildren: 0.2, // Initial delay before starting animations
      },
    },
  };

  // Variants for individual headings
  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <HeroSection>
        <Navbar />
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative flex flex-col items-center justify-center px-4"
        >
          <motion.div
            variants={item}
            className="text-3xl md:text-6xl font-bold dark:text-white text-center pb-4"
          >
            Code Faster with AI, Without All the Guesswork
          </motion.div>
          <motion.div variants={item}>
            <div className="font-extralight text-center md:text-xl dark:text-neutral-200 pt-4">
              Gait is a collaboration tool that stores prompts, context, and
              code together
            </div>
            <div className="font-extralight text-center md:text-xl dark:text-neutral-200 pb-8">
              Easily understand and edit your team's AI-generated code
            </div>
          </motion.div>
          <motion.div variants={item} className="flex space-x-2">
            <Button text="Download for github copilot" />
            <Button text="Download for Cursor" />
          </motion.div>
        </motion.div>
      </HeroSection>
    </div>
  );
}
