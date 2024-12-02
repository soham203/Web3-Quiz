import React from 'react';

const About1 = ({ showAbout, toggleAbout }) => {
  if (!showAbout) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-black p-6 rounded-lg max-w-[90%] md:max-w-[50%] text-center bg-opacity-50 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-[#8E44AD] mb-4">About QuizChain</h2>
        <p className="text-white mb-6 text-lg text-start">
          QuizChain is a platform dedicated to empowering the Web3 community. 
          Our goal is to help individuals learn, explore, and grow in the world 
          of blockchain and decentralized technologies through interactive quizzes. 
          This project is also a testament to our passion for Web3 and a way to showcase 
          our development skills.
        </p>
        <button
          className="bg-[#8E44AD] text-white py-2 px-4 rounded hover:bg-[#722e91]"
          onClick={toggleAbout}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default About1;
