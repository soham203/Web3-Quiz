import React from 'react'
import react, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import quizData from '../data/quizData.json'

const topics = ['Solidity', 'Rust', 'DeFi', 'BlockChain']

const QuizApp = () => {

  const [openDropdowns, setOpenDropdowns] = useState({
    Solidity: false,
    Rust: false,
    DeFi: false,
    BlockChain: false,
  });

  const toggleDropdown = (topic) => {
    setOpenDropdowns((prevState) => {
     const newState = { ...prevState };
     for (let key in newState ) {
      newState[key] = false;
     }
      newState[topic] = !prevState[topic];
      return newState;
    });
  };

  return (
    <div className="bg-black h-screen flex items-center justify-center flex-col">
    <div className="w-full md:w-4/6 lg:w-5/6 px-4 h-fit gap-6 flex flex-col items-center justify-center">
      {topics.map((topic, index) => (

      <div key={index} className='w-full lg:w-5/6 h-fit flex flex-col items-center justify-center'>
        <div
        className="bg-[#8E44AD] w-full lg:w-4/6 p-4 flex justify-between rounded-lg cursor-pointer"
        onClick={() => toggleDropdown(topic)}
      >
        <label className="font-semibold text-3xl text-white">{topic}</label>
        <button id="click" onClick={toggleDropdown}>
        <FontAwesomeIcon className='text-3xl' icon={faAngleDown} style={{color: "#ffffff",}} />
        </button>
      </div>

      <div
       className={`w-full lg:w-4/6 bg-white rounded-md shadow-lg mt-4 overflow-hidden transition-all duration-300 ease-in-out ${openDropdowns[topic] ? 'max-h-64 py-4' : 'max-h-0 py-0'}`}
     >
       <ul className="space-y-2 px-4">
         <li className="text-gray-800">Item 1</li>
         <li className="text-gray-800">Item 2</li>
         <li className="text-gray-800">Item 3</li>
       </ul>
     </div>
     </div>
      ))}

    </div>
  </div>  
  )
};

export default QuizApp