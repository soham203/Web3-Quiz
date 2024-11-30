import React from 'react'
import { Typewriter } from 'react-simple-typewriter';

export default function LandingPage() {
  return (
    
    <div className='text-white'>
    <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className='text-[#00df9a] font-bold p-2'>
        GROWING WITH DATA ANALYTICS
      </p>
      <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        Grow with data.
      </h1>
      <div className='flex justify-center items-center'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 lg:text-3xl'>
          Fast, flexible financing for
        </p>
        <div className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 lg:text-3xl'>
        <Typewriter
        words={['SOLIDITY', 'RUST', 'BLOCKCHAIN']}
        loop={true}
        typeSpeed={120}
        deleteSpeed={140}
        delaySpeed={1000}
        cursor
        cursorStyle="_"
        />
        </div>
      </div>
      <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
      <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Take Quiz</button>
    </div>
  </div>
);
}
