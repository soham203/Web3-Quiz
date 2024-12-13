import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// import About from './About';
import About1 from './About1';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav =() => {
        setNav(false);
  };

  const toggleAbout = () => setShowAbout(!showAbout);

  return (
    <>
    <div className='flex justify-between bg-black items-center h-24 w-full px-4 text-white'>
       <h1 className='w-full text-3xl font-bold text-[#8E44AD]'>
        <Link to="/LandingPage">QuizChain</Link>
      </h1>
      <ul className='hidden md:flex text-lg font-semibold'>       
       
       
      <a href="https://github.com/soham203/Web3-Quiz"
       rel="nooprner noreferrer" 
          target="_blank"
      >
      <li  className='p-4 '>Contribute</li></a> 
        <li className='p-4 cursor-pointer' onClick={() => { closeNav(); toggleAbout(); }}>About</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <div className="md:hidden">
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#8E44AD] m-4'>
        <Link to="/LandingPage" onClick={closeNav}>QuizChain</Link>
          </h1>        
       
          <a 
          href="https://github.com/soham203/Web3-Quiz" 
          rel="nooprner noreferrer" 
          target="_blank"
          >
          <li  className='p-4 border-b border-gray-600' onClick={closeNav} >Contribute</li></a>
          <li className='p-4  border-b border-gray-600 cursor-pointer' onClick={() => { closeNav(); toggleAbout(); }} >About</li>
      </ul>
      </div>
    </div>
    
   <About1 showAbout={showAbout} toggleAbout={toggleAbout} />

    </>
  );
};

export default Navbar;