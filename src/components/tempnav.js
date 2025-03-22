"use client";
import React, { useState } from "react";

export default function Tempnav() {
  // Track whether the nav/banner is visible
  const [isNavVisible, setIsNavVisible] = useState(true);

  // If nav is closed, don't render anything
  if (!isNavVisible) return null;

  return (
    <section>
      <nav>
        <div className="relative flex items-center justify-center w-full bg-gradient-to-r from-black/70 to-black/30 py-2 px-4">
          {/* Close Button (top-right) */}
          <button
            onClick={() => setIsNavVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white font-bold"
          >
            ✕
          </button>
          {/* Your content here */}
          <span className="text-white">
            FLAT 15% OFF on your next escape. Use code: WIN15
          </span>
        </div>
      </nav>
    </section>
  );
}
