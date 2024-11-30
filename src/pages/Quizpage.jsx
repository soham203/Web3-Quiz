import React from 'react'
import { Typewriter } from 'react-simple-typewriter';

function Quizpage() {
  return (
    <div className='text-white bg-black  md:text-4xl sm:text-4xl text-xl py-4 lg:text-5xl items-center h-screen font-extrabold flex justify-center align-middle'>
      <p>LAUNCHING SOON,</p>
      <div className='pl-2'>
      <Typewriter
        words={['GOOD', 'THINGS', 'TAKE', 'TIME', 'TO', 'HAPPEN']}
        loop={true}
        typeSpeed={120}
        deleteSpeed={140}
        delaySpeed={1000}
        cursor
        cursorStyle="_"
        />
        </div>
    </div>
  )
}

export default Quizpage