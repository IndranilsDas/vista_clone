"use client";
import { useState } from 'react';
import { Prompt, Aladin } from 'next/font/google';

// Font configurations
const prompt = Prompt({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '800'],
});

const aladin = Aladin({
  subsets: ['latin'],
  weight: '400',
});

// Slides data:
// - First slide remains unchanged.
// - Second slide now uses an economy/easy booking message.
// - Third and fourth slides remain as defined.
const slides = [
  {
    image: "/images/interior_living_room.jpg",
    title: "Launching Vista Residences",
    button: "Boutique City Stays",
  },
  {
    image: "/images/interior_design_style.jpg",
    title: "Getaways At An Affordable",
    button: "Economy Stays For Everyone",
  },
  {
    image: "/images/interior_design_furniture_glass.jpg",
    title: "Newly Launched Villas",
    button: "50% OFF on 2nd Night",
  },
  {
    image: "/images/interior_style_design.jpg",
    title: "Introducing Vio",
    button: "Experience the Future of Luxury",
  },
];

export default function Titlescreen() {
  const [current, setCurrent] = useState(0);

  // Move to the next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className={`
        ${prompt.className} 
        relative 
        h-[85vh] 
        overflow-y-visible 
        overflow-x-clip 
        flex 
        flex-col 
        justify-center
      `}
    >
      {/* Slides Wrapper */}
      <div
        className="flex transition-transform duration-500 ease-in-out bg-no-repeat bg-cover h-full w-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Slider Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full z-30 text-white cursor-pointer"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full z-30 text-white cursor-pointer"
      >
        ❯
      </button>

      {/* Overlay Text (changes based on active slide) */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center z-20">
        <h1 className={`${aladin.className} text-8xl`}>
          {slides[current].title}
        </h1>
        <button className="mt-4 px-6 py-2 bg-[rgba(1,0,9,0.4)] hover:bg-orange-300 cursor-pointer hover:text-black duration-300 text-white ring ring-white rounded-md">
          {slides[current].button}
        </button>
      </div>

      {/* Inquiry Form */}
      <div
        className={`
          absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 
          w-[75vw] overflow-y-auto 
          rounded-xl bg-white shadow-md
          transition-transform duration-500 ease-in-out 
          z-40 text-black
        `}
      >
        <div className="relative flex flex-wrap items-center justify-between p-4 gap-2">
          {/* Location Field */}
          <div className="flex flex-col min-w-[180px]">
            <label className="text-sm font-semibold mb-1">
              Location / Villas / Landmark
            </label>
            <input
              type="text"
              placeholder="Where To?"
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Check-in */}
          <div className="flex flex-col min-w-[120px]">
            <label className="text-sm font-semibold mb-1">Check-in</label>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col min-w-[120px]">
            <label className="text-sm font-semibold mb-1">Check-out</label>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col min-w-[150px]">
            <label className="text-sm font-semibold mb-1">Guests</label>
            <input
              type="text"
              placeholder="2 Guests, 1+ Rooms"
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          {/* SEARCH Button */}
          <button className="mt-3 md:mt-0 px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
            SEARCH
          </button>
        </div>
        <div className="flex flex-wrap justify-between items-center bg-amber-100 px-4 py-2 text-sm text-gray-700">
          <span>
            Finding your ideal vacation spot should be easy! We're here to help.
          </span>
          <a href="#" className="text-blue-600 hover:underline">
            Request Callback
          </a>
        </div>
      </div>
    </div>
  );
}
