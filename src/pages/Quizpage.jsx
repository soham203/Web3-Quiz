import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const topics = ['Solidity', 'Rust', 'DeFi', 'BlockChain'];

const QuizApp = () => {
  const navigate = useNavigate(); // Move this inside the component
  const [openDropdowns, setOpenDropdowns] = useState({
    Solidity: false,
    Rust: false,
    DeFi: false,
    BlockChain: false,
  });

  const toggleDropdown = (topic) => {
    setOpenDropdowns((prevState) => {
      const newState = { ...prevState };
      for (let key in newState) {
        newState[key] = false;
      }
      newState[topic] = !prevState[topic];
      return newState;
    });
  };

  const handleEasy = () => {
    navigate('/solEasy'); // Correctly navigates to /questions
  };
  const handleMedium = () => {
    navigate('/solmedium'); // Correctly navigates to /questions
  };
  const handleHard = () => {
    navigate('/solhard'); // Correctly navigates to /questions
  };

  return (
    <div className="bg-black h-screen flex items-center justify-center flex-col">
      <div className="w-full md:w-4/6 lg:w-5/6 px-4 h-fit gap-4 flex flex-col items-center justify-center">
        {topics.map((topic, index) => (
          <div key={index} className='w-full lg:w-5/6 h-fit flex flex-col items-center justify-center'>
            <div
              className="bg-[#8E44AD] w-full lg:w-4/6 p-4 flex justify-between rounded-lg cursor-pointer"
              onClick={() => toggleDropdown(topic)}
            >
              <label className="font-semibold text-3xl text-white">{topic}</label>
              <button id="click" onClick={() => toggleDropdown(topic)}>
                <FontAwesomeIcon className='text-3xl' icon={faAngleDown} style={{ color: "#ffffff" }} />
              </button>
            </div>

            <div
              className={`cursor-pointer w-full lg:w-4/6 bg-black rounded-md shadow-lg mt-2 overflow-hidden transition-all flex flex-col gap-2 duration-300 ease-in-out ${openDropdowns[topic] ? 'max-h-64 py-4' : 'max-h-0 py-0'}`}
            >
              <div className='flex justify-between px-4 py-2 bg-white rounded-lg' onClick={handleEasy}>
                <label className="font-semibold text-2xl text-[#8E44AD]">Easy</label>
                <button id="click">
                  <FontAwesomeIcon className='text-2xl' icon={faCircleChevronRight} style={{ color: "#8E44AD" }} />
                </button>
              </div>
              <div className='flex justify-between px-4 py-2 bg-white rounded-lg' onClick={handleMedium}>
                <label className="font-semibold text-2xl text-[#8E44AD]">Medium</label>
                <button id="click" >
                  <FontAwesomeIcon className='text-2xl' icon={faCircleChevronRight} style={{ color: "#8E44AD" }} />
                </button>
              </div>
              <div className='flex justify-between px-4 py-2 bg-white rounded-lg' onClick={handleHard}>
                <label className="font-semibold text-2xl text-[#8E44AD]">Hard</label>
                <button id="click">
                  <FontAwesomeIcon className='text-2xl' icon={faCircleChevronRight} style={{ color: "#8E44AD" }} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizApp;