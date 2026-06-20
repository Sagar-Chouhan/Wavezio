"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const Ambient3DGrid = ({ className }: { className?: string }) => {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {/* 
        Mask image fades out the top of the grid so it seamlessly blends into the dark background 
      */}
      <div 
        className="absolute inset-0"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 20%, black 80%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 20%, black 80%)',
        }}
      >
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          {/* A glowing orb in the distance to act as a light source */}
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[60vw] h-[30vh] bg-primary/20 blur-[120px] rounded-full" />
          
          {/* The moving 3D grid floor */}
          <div 
            className="w-[200vw] h-[200vh] absolute bottom-[-80vh]"
            style={{
              transform: "rotateX(75deg) translateY(-20%)",
              transformOrigin: "center center",
              backgroundSize: "60px 60px",
              backgroundImage: `
                linear-gradient(to right, rgba(139, 92, 246, 0.2) 2px, transparent 2px),
                linear-gradient(to bottom, rgba(139, 92, 246, 0.2) 2px, transparent 2px)
              `,
              animation: "grid-move 2s linear infinite",
            }}
          />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes grid-move {
          0% {
            background-position: 0px 0px;
          }
          100% {
            background-position: 0px 60px;
          }
        }
      `}} />
    </div>
  );
};
