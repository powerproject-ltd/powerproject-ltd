'use client';

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface BoxesProps {
  className?: string;
}

export const Boxes = ({ className, ...rest }: BoxesProps) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  
  // Using colors that match your blue-red tech theme
  const colors = [
    "rgb(0 212 255)", // primary cyan
    "rgb(255 68 68)", // primary red
    "rgb(99 102 241)", // secondary blue
    "rgb(255 107 107)", // secondary red
    "rgb(255 140 66)", // accent orange
    "rgb(0 153 204)", // dark cyan
    "rgb(204 51 51)", // dark red
    "rgb(139 92 246)", // violet
    "rgb(255 99 99)", // light red
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-50%,-50%) skewX(-48deg) skewY(14deg) scale(1.2) rotate(0deg) translateZ(0)`,
        pointerEvents: 'auto',
      }}
      className={cn(
        "absolute left-1/2 top-1/2 p-4 flex -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] z-10",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-16 h-8 border-l border-slate-700 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-16 h-8 border-r border-t border-slate-700 relative"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};
