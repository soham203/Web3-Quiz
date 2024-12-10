import React, { useState } from 'react';
import QuestionComp from '../../../components/QuestionComp';
import quizData from '../../../data/solData.json';

 export default function SolEasy() {
  const [selectedOptions, setSelectedOptions] = useState({});
  
  const questionsPerPage = 5;

  // Filter for easy questions
  const easyQuestions = quizData.solidity.easy;
  
  // Get the current set of easy questions to display
  const currentQuestions = easyQuestions.slice(0, questionsPerPage);

  return (
    <div>
      {currentQuestions.map((question) => (
        <div key={question.id}> {/* Use question.id for unique key */}
          <QuestionComp
            question={question}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        </div>
      ))}
    </div>
  );
}
