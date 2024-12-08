import React from 'react'
// import quizData from '../data/quizData.json'

const QuizApp = () => {
  return (
   <div className='bg-black h-screen flex items-center justify-center '>
    <div className='backdrop-blur-sm bg-opacity-50  w-3/6 h-fit gap-4 flex flex-col items-center justify-center'>
      <div className="bg-gray-600 w-3/6 p-4 flex justify-between rounded-lg">
      <p>Solidity</p>
      <button>arrow</button>
      </div>
      <div className="bg-gray-600 w-3/6 p-4 flex justify-between rounded-lg">
      <p>Solidity</p>
      <button>arrow</button>
      </div>
      <div className="bg-gray-600 w-3/6 p-4 flex justify-between rounded-lg">
      <p>Solidity</p>
      <button>arrow</button>
      </div>
      <div className="bg-gray-600 w-3/6 p-4 flex justify-between rounded-lg">
      <p>Solidity</p>
      <button>arrow</button>
      </div>
      </div>
   </div>
  )
};

export default QuizApp