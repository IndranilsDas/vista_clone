import React from 'react'
import { Prompt } from 'next/font/google'
import { GrMapLocation } from "react-icons/gr";


const prompt = Prompt({
    subsets: ['latin'],
    weight: ['200', '300', '400', '600', '800'],
  });

  const destinations = [
    { place: "Lonavala", image: "/svg/Lonavala.svg" },
    { place: "Karjat", image: "/svg/Karjat.svg" },
    { place: "Kasauli", image: "/svg/Kasauli.svg" },
    { place: "Ooty", image: "/svg/Ooty.svg" },
    { place: "Mussoorie", image: "/svg/Mussoorie.svg" },
    { place: "Panchgani", image: "/svg/Panchgani.svg" },
    { place: "Udaipur", image: "/svg/Udaipur.svg" },
    { place: "Nainital", image: "/svg/Nainital.svg" },
    { place: "Goa", image: "/svg/Goa.svg" },
    { place: "Alibaug", image: "/svg/Alibaug.svg" },
    { place: "Manali", image: "/svg/Manali.svg" },
    { place: "Coorg", image: "/svg/Coorg.svg" },
    { place: "Nashik", image: "/svg/Nashik.svg" },
    { place: "Jaipur", image: "/svg/Jaipur.svg" },
    { place: "Alleppey", image: "/svg/Alleppey.webp" },
    { place: "Wayanad", image: "/svg/Wayanad.svg" },
    { place: "Chandigarh", image: "/svg/Chandigarh.svg" },
    { place: "Bhimtal", image: "/svg/Bhimtal.svg" },
    { place: "Conoor", image: "/svg/Conoor.svg" },
    { place: "Dehradun", image: "/svg/Dehradun.svg" },
    { place: "Gurgaon", image: "/svg/Gurgaon.svg" },
    { place: "Mahabaleshwar", image: "/svg/Mahabaleshwar.svg" },
    { place: "Manesar", image: "/svg/Manesar.svg" },
    { place: "Pune", image: "/svg/Pune.svg" },
    { place: "Igatpuri", image: "/svg/Igatpuri.svg" },
    { place: "Shimla", image: "/svg/Shimla.svg" },
    { place: "Wada", image: "/svg/Wada.svg" }
];

  
  


export default function Destinations() {
  return (
    <section>
        <div className={`${prompt.className} bg-gray-50 px-26`}>
            <div className='flex-col py-20'>
            <div className='flex justify-start items-center gap-4'>
            <h1 className='items-left py-4 text-black text-2xl font-semibold'>Pick a destination</h1>
            <div className='flex text-black gap-2'><GrMapLocation className='h-4 w-4'/><u className='text-sm font-thin'>Show nearby locations</u></div>
            </div>
            <div className='flex flex-col border'>
            <div className=' grid grid-rows-2 grid-flow-col overflow-x-auto no-scroller'>
            {destinations.map((item,index)=>(<div key={index} className='flex flex-col h-30 w-30 m-6 p-4 items-center justify-center'>
            <img src={item.image} className=''></img>
             <h1 className='text-gray-700 text-lg'>{item.place}</h1>
            </div>))}
            </div>
            </div>
            </div>
        </div>
    </section>
  )
}
