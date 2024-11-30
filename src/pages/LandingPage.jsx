import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter';

export default function LandingPage() {

    const navigate = useNavigate();

    const handelNav = () => {
      navigate('/quizpage');
    }

  return (
    
    <div className='text-white bg-black'>
    <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className='text-[#8E44AD] font-bold p-2'>
      POWERING THE FUTURE OF WEB 3.0
      </p>
      <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
      Unlock Blockchain Expertise.
      </h1>
      <div className='flex justify-center items-center'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 lg:text-3xl'>
          Test your Knowledge of
        </p>
        <div className='md:text-5xl pl-2 sm:text-4xl text-xl font-bold sm:pl-3 lg:text-3xl'>
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
      <p className='md:text-2xl text-xl font-bold text-gray-500'> One-stop quiz site for all blockchain-related technologies.</p>
      <button onClick={ handelNav } className='bg-[#8E44AD] w-[200px] rounded-md my-6 mx-auto py-3 text-black text-xl font-semibold'>Take Quiz</button>
    </div>
  </div>
);
}
