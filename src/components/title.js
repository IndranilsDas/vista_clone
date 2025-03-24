'use client';
import { useState, useEffect } from 'react';
import { Prompt, Aladin } from 'next/font/google';

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '800'],
});

const aladin = Aladin({
  subsets: ['latin'],
  weight: '400',
});

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
  const [isUnder850, setIsUnder850] = useState(false);

  // Check viewport size and update form visibility for 850px threshold
  useEffect(() => {
    const handleResize = () => {
      setIsUnder850(window.innerWidth < 860);
    };
    window.addEventListener("resize", handleResize);
    // Check on mount
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className={`${prompt.className} relative h-[85vh] overflow-y-visible overflow-x-clip flex flex-col justify-center`}
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

      {/* Overlay Text */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center z-20">
        <h1 className={`${aladin.className} text-8xl`}>
          {slides[current].title}
        </h1>
        <button className="mt-4 px-6 py-2 bg-[rgba(1,0,9,0.4)] hover:bg-orange-300 cursor-pointer hover:text-black duration-300 text-white ring ring-white rounded-md">
          {slides[current].button}
        </button>
      </div>

      {/* Conditional Inquiry Form */}
      {isUnder850 ? <MobileInquiryForm /> : <DesktopInquiryForm />}
    </div>
  );
}

function MobileInquiryForm() {
  return (
    <div
      className="
        absolute bottom-4 left-1/2 transform -translate-x-1/2 
        w-[90vw] p-2 rounded-lg bg-white shadow-md 
        transition-transform duration-500 ease-in-out 
        z-40 text-black
      "
    >
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Location / Villas / Landmark"
          className="p-2 border border-gray-300 rounded"
        />
        <div className="flex gap-2">
          <input
            type="date"
            className="p-2 border border-gray-300 rounded w-1/2"
          />
          <input
            type="date"
            className="p-2 border border-gray-300 rounded w-1/2"
          />
        </div>
        <input
          type="text"
          placeholder="Guests"
          className="p-2 border border-gray-300 rounded"
        />
        <button className="px-4 py-2 bg-black text-white rounded">
          SEARCH
        </button>
      </div>
    </div>
  );
}

function DesktopInquiryForm() {
  return (
    <div
      className="
        absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
        w-[75vw] p-4 rounded-xl bg-white shadow-md 
        transition-transform duration-500 ease-in-out 
        z-40 text-black
      "
    >
      <div className="flex flex-wrap items-center justify-between p-4 gap-2">
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
  );
}
