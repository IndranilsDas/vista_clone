'use client';
import React, { useEffect, useState } from 'react';
import { Prompt } from 'next/font/google';
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import Tempnav from './tempnav';

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '800'],
});

export default function Nav() {
  const [Scrolled, SetScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("scroll Y value:", window.scrollY)
      if (window.scrollY > window.innerHeight/20) {
        SetScrolled(true);
      } else {
        SetScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${prompt.className}`}>
      
      <nav>
        
        <div className={`fixed w-full top-0 z-50 transition duration-300 
          ${Scrolled ? 'backdrop-blur-md shadow-xl' : 'bg-transparent'}`}>
          <nav>
        <div className="relative flex items-center justify-between w-full bg-gradient-to-r from-blue-300 to-orange-300 py-2 px-4">
          {/* Promo text */}
          <span className="text-black">
            FLAT 15% OFF on your next escape. Use code: WIN15
          </span>

          {/* Close Button (right-most position) */}
          <button
            
            className="text-white font-bold"
          >
            ✕
          </button>
        </div>
      </nav>
      <div className='flex flex-wrap items-center justify-center md:justify-end gap-4 px-6 py-4 '>

      
          <button className={`text-sm md:text-base ${Scrolled ? 'text-black' : 'text-white'} hover:text-orange-300 duration-300`}>
            Explore
          </button>

          <button className={`text-sm md:text-base uppercase font-semibold px-3 py-2 rounded 
            ${Scrolled ? 'ring ring-black text-black' : 'ring ring-white text-white'} 
            hover:bg-orange-300 hover:text-black transition duration-200`}>
            buy a property
          </button>

          <button className={`text-sm md:text-base uppercase font-semibold px-3 py-2 rounded 
            ${Scrolled ? 'ring ring-black text-black' : 'ring ring-white text-white'} 
            hover:bg-orange-300 hover:text-black transition duration-200`}>
            list your property
          </button>

          <button className={`flex items-center gap-2 text-sm md:text-base uppercase font-semibold px-3 py-2 rounded 
            ${Scrolled ? 'ring ring-black text-black' : 'ring ring-white text-white'} 
            hover:bg-orange-300 hover:text-black transition duration-200`}>
              <LuPhoneCall className='h-4 w-4'/>

            +91 9167928471
          </button>

          <button>
            <CiBellOn className={`h-8 w-8 cursor-pointer hover:text-orange-300 duration-300 ${Scrolled ? 'text-black' : 'text-white'}`} />
          </button>

          <button>
            <FaUserCircle className={`h-8 w-8 cursor-pointer hover:text-orange-300 duration-300 ${Scrolled ? 'text-black' : 'text-white'}`} />
          </button>
          
        </div>
        </div>
      </nav>
    </div>
  );
}
