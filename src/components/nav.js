'use client';
import React, { useEffect, useState } from 'react';
import { Prompt } from 'next/font/google';
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '800'],
});

export default function Nav() {
  const [Scrolled, SetScrolled] = useState(false);
  const [tempnav, SetTempNav] = useState(true);
  const [isunder, setIsUnder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      SetScrolled(window.scrollY > window.innerHeight / 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsUnder(window.innerWidth > 850);
    };
    window.addEventListener("resize", handleResize);
    // Check on mount
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${prompt.className}`}>
      {isunder ? (
        <nav>
          <div className={`fixed w-full top-0 z-50 transition duration-300 
            ${Scrolled ? 'backdrop-blur-md shadow-xl' : 'bg-transparent'}`}>

            {/* Tempnav (Promo Bar) */}
            {tempnav && (
              <div className="relative flex items-center justify-between bg-gradient-to-r from-blue-300 to-orange-300 py-2 px-4 text-xs sm:text-sm md:text-base">
                <span className="text-black text-center flex-1">
                  FLAT 15% OFF on your next escape. Use code: <strong>WIN15</strong>
                </span>
                <button onClick={() => SetTempNav(false)} className="text-white font-bold">
                  ✕
                </button>
              </div>
            )}

            {/* Main Navbar */}
            <div className="flex flex-wrap items-center justify-between px-4 md:px-6 py-3">
              {/* Logo aligned to the left */}
              <div className="flex items-center">
              <img src="images/stayvista_logo.svg" className={`h-10 w-20 ${Scrolled ? 'invert-0' : 'invert'}`} alt="StayVista Logo" />
              </div>

              {/* Navigation Buttons aligned to the right */}
              <div className="flex items-center gap-2 md:gap-4 ml-auto">
                <button className={`text-xs sm:text-sm md:text-base ${Scrolled ? 'text-black' : 'text-white'} hover:text-orange-300 duration-300`}>
                  Explore
                </button>

                <button className={`text-xs sm:text-sm md:text-base uppercase font-semibold px-2 md:px-3 py-1 md:py-2 rounded 
                  ${Scrolled ? 'ring ring-black text-black' : 'ring ring-white text-white'} 
                  hover:bg-orange-300 hover:text-black transition duration-200`}>
                  Buy a Property
                </button>

                <button className={`text-xs sm:text-sm md:text-base uppercase font-semibold px-2 md:px-3 py-1 md:py-2 rounded 
                  ${Scrolled ? 'ring ring-black text-black' : 'ring ring-white text-white'} 
                  hover:bg-orange-300 hover:text-black transition duration-200`}>
                  List Your Property
                </button>

                <button className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base uppercase font-semibold px-2 md:px-3 py-1 md:py-2 rounded 
                  ${Scrolled ? 'ring ring-black text-black' : 'ring ring-white text-white'} 
                  hover:bg-orange-300 hover:text-black transition duration-200`}>
                  <LuPhoneCall className='h-4 w-4 sm:h-5 sm:w-5' />
                  <span className="hidden sm:inline">+91 9167928471</span>
                </button>

                <button>
                  <CiBellOn className={`h-6 w-6 sm:h-8 sm:w-8 cursor-pointer hover:text-orange-300 duration-300 ${Scrolled ? 'text-black' : 'text-white'}`} />
                </button>

                <button>
                  <FaUserCircle className={`h-6 w-6 sm:h-8 sm:w-8 cursor-pointer hover:text-orange-300 duration-300 ${Scrolled ? 'text-black' : 'text-white'}`} />
                </button>
              </div>
            </div>
          </div>
        </nav>
      ) : null}
    </div>
  );
}
