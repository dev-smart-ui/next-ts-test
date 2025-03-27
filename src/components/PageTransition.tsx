"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export const PageTransition = () => {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentPath, setCurrentPath] = useState(pathname);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsAnimating(true);
    setCurrentPath(pathname);
  }, [pathname]);
  
  return (
    <AnimatePresence mode="wait">
      {isAnimating && (
        <motion.div
          key={currentPath}
          className="fixed top-0 left-0 w-full h-full bg-[#1f2937] z-50"
          initial={{ y: "-100%" }}
          animate={{ y: ["-100%", "0%", "0%", "100%"] }}
          transition={{ 
            duration: 0.6, 
            times: [0, 0.3, 0.7, 1], 
            ease: ["easeIn", "linear", "easeOut"]
          }}
          onAnimationComplete={() => setIsAnimating(false)}
        />
      )}
    </AnimatePresence>
  );
};
