import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import LandingPage from '../pages/LandingPage';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav =() => {
        setNav(false);
  };

  return (
    <div className='flex justify-between bg-black items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
       <h1 className='w-full text-3xl font-bold text-[#8E44AD]'>
        <Link to="/LandingPage">QuizChain</Link>
      </h1>
      <ul className='hidden md:flex text-lg font-semibold'>       
       
       
      <a href="https://github.com/soham203/Web3-Quiz"
       rel="nooprner noreferrer" 
          target="_blank"
      >
      <li  className='p-4 '>Contribute</li></a> 
        <li className='p-4'>About</li>
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
          <li className='p-4  border-b border-gray-600' onClick={closeNav} >About</li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;