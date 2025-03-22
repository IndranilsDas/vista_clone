'use client';
import React, { useState } from 'react';
import { Prompt } from 'next/font/google';

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '800'],
});

// Tabs (what the user sees)
const tabs = [
  { text: 'All' },
  { text: 'Bank offers' },
  { text: 'StayVista offers' },
];

// Offers data
const offers = [
  {
    description:
      'Get 11% off (up to ₹3000) on your StayVista booking when you pay with an HSBC TravelOne Credit Card.',
    type: 'bank_offer',
    code: 'HSBCTRAVELONE',
    title: 'HSBC',
  },
  {
    description:
      'Get 10% off (up to ₹2500) on your StayVista booking when you pay with an ICICI Credit Card.',
    type: 'bank_offer',
    code: 'ICICI10',
    title: 'ICICI Bank',
  },
  {
    description:
      'Get 10% off (up to ₹2500) on your StayVista booking when you pay with a Federal Bank Credit & Debit Card.',
    type: 'bank_offer',
    code: 'FEDERAL10',
    title: 'Federal Bank',
  },
  {
    description:
      'Get 10% off (up to ₹2000) on your StayVista booking when you pay with a Yes Bank Credit Card.',
    type: 'bank_offer',
    code: 'YESBANK10',
    title: 'Yes Bank',
  },
  {
    description:
      'Enjoy FLAT 50% OFF on 2nd night when you book our newly launched vistas for your next holiday adventure.',
    type: 'stayvista_offer',
    code: 'NEWVISTAS',
    title: 'StayVista',
  },
  {
    description:
      'Welcoming 2025 with an exclusive offer! Enjoy up to 10% off on your next escape.',
    type: 'stayvista_offer',
    code: 'WELCOME2025',
    title: 'StayVista',
  },
  {
    description:
      'Save on your dream getaway by booking 2+ nights, and unlock an exclusive discount for your stay!',
    type: 'stayvista_offer',
    code: '2PLUSNIGHTS',
    title: 'StayVista',
  },
];

export default function Offers() {
  // Track which tab is active
  const [activeTab, setActiveTab] = useState('All');

  // Helper to get the filtered offers
  const filteredOffers = offers.filter((offer) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Bank offers') return offer.type === 'bank_offer';
    if (activeTab === 'StayVista offers') return offer.type === 'stayvista_offer';
    return true; // default
  });

  // Copy coupon code to clipboard
  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Copied: ${code}`);
  };

  return (
    <section className={`${prompt.className} bg-white`}>
      <div className="flex flex-col px-6 md:px-26">
        <h1 className="text-3xl text-black py-4 font-semibold">Offers for You</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-4">
          {tabs.map((item, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-black bg-gray-100 rounded-lg duration-300 
                hover:bg-blue-100 hover:text-blue-800 
                ${activeTab === item.text ? 'bg-blue-100 text-blue-800' : ''}`}
              onClick={() => setActiveTab(item.text)}
            >
              {item.text}
            </button>
          ))}
        </div>

        {/* Single-row horizontally scrollable offers */}
        <div className="flex flex-nowrap gap-4 overflow-x-auto py-2 justify-around">
          {filteredOffers.map((offer, index) => (
            <div
              key={index}
              className="
                border border-gray-200 
                rounded-lg p-4 flex-shrink-0 
                w-[250px]  /* Adjust width to match your preferred size */
              "
            >
              {/* Top Row: Title + Type */}
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold">{offer.title || 'Bank'}</div>
                <div className="text-sm text-gray-500 capitalize">
                  {offer.type === 'bank_offer' ? 'Bank Offer' : 'StayVista Offer'}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-700 mb-2">{offer.description}</p>
              <p className="text-xs text-gray-400">*T&C apply</p>

              {/* Bottom Row: Code + Copy Button */}
              <div className="flex items-center justify-between mt-2">
                <div className="bg-gray-500 rounded px-2 py-1 text-sm font-mono">
                  {offer.code}
                </div>
                <button
                  onClick={() => copyCode(offer.code)}
                  className="bg-black text-white text-sm px-4 py-1 rounded"
                >
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
