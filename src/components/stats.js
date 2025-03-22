import React from 'react'
import { Prompt } from 'next/font/google';

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '800'],
});

export default function Stats() {
  return (
    <section className={`${prompt.className}`}>
        <div className='flex px-16 p-6 justify-center items-center py-16 gap-16 bg-white'>
            <div className='flex gap-2 px-4 font-light justify-center items-center text-black'><img src='/images/svg/traveller.svg'></img>Awarded Favourite<br/>
            Villa Rentals</div>
            <h1 className='border-r border-black h-12'></h1>
            <div className='flex text-black px-4 justify-center items-center gap-2'><img src='/images/svg/100.webp'></img><h1 className='font-light'>Homes<br/> accepted</h1></div>
            <h1 className='border-r border-black h-12'></h1>
            <div className='flex text-black px-4 justify-center items-center gap-2'><img src='/images/svg/1000+.svg'></img><h1 className='font-light'>Handpicked<br/>Villas</h1></div>
            <h1 className='border-r border-black h-12'></h1>
            <div className='flex text-black px-4 justify-center items-center gap-2'><img src='/images/svg/8l.svg'></img><h1 className='font-light'>Happy guests<br/>
            hosted</h1></div>

        </div>
    </section>
  )
}
