import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

// List of all topics for the quiz
const topics = ['Solidity', 'Rust', 'DeFi', 'BlockChain'];

const QuizApp = () => {
  const navigate = useNavigate(); // Used for navigation
  const [openDropdowns, setOpenDropdowns] = useState({
    Solidity: false,
    Rust: false,
    DeFi: false,
    BlockChain: false,
  });

  // Toggles the visibility of the difficulty dropdown for a given topic
  const toggleDropdown = (topic) => {
    setOpenDropdowns((prevState) => {
      const newState = { ...prevState };
      for (let key in newState) {
        newState[key] = false; // Close all other dropdowns
      }
      newState[topic] = !prevState[topic]; // Toggle the current topic's dropdown
      return newState;
    });
  };

  // Handles navigation to the quiz page for a given topic and difficulty
  const handleDifficultyClick = (topic, difficulty) => {
    const topicLowerCase = topic.toLowerCase(); // Convert topic to lowercase to match the route
    navigate(`/quiz/${topicLowerCase}/${difficulty}`); // Navigate to the dynamic route
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center flex-col">
      <div className="w-full md:w-4/6 lg:w-5/6 px-4 gap-4 flex flex-col items-center justify-center">
        
        {topics.map((topic, index) => (
          <div key={index} className="w-full lg:w-5/6 flex flex-col items-center justify-center">
            
            {/* Topic Button */}
            <div
              className="bg-[#8E44AD] w-full lg:w-4/6 p-4 flex justify-between rounded-lg cursor-pointer"
              onClick={() => toggleDropdown(topic)} // Toggle dropdown
            >
              <label className="font-semibold text-3xl text-white">{topic}</label>
              <button>
                <FontAwesomeIcon className="text-3xl" icon={faAngleDown} style={{ color: "#ffffff" }} />
              </button>
            </div>

            {/* Dropdown for Difficulty */}
            <div
              className={`cursor-pointer w-full lg:w-4/6 bg-black rounded-md shadow-lg mt-2 overflow-hidden transition-all flex flex-col gap-2 duration-300 ease-in-out ${
                openDropdowns[topic] ? 'max-h-64 py-4' : 'max-h-0 py-0'
              }`}
            >
              {['easy', 'medium', 'hard'].map((difficulty) => (
                <div 
                  key={difficulty} 
                  className="flex justify-between px-4 py-2 bg-white rounded-lg" 
                  onClick={() => handleDifficultyClick(topic, difficulty)} // Navigate to the quiz page
                >
                  <label className="font-semibold text-2xl text-[#8E44AD] capitalize">{difficulty}</label>
                  <button>
                    <FontAwesomeIcon className="text-2xl" icon={faCircleChevronRight} style={{ color: "#8E44AD" }} />
                  </button>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizApp;
