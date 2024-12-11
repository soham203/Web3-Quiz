import React, { useState } from 'react';
import QuestionComp from '../../../components/QuestionComp';
import DeFiData from '../../../data/defiData.json';

 export default function DeFiEasy() {
  const [selectedOptions, setSelectedOptions] = useState({});
  
  const questionsPerPage = 5;

  // Filter for easy questions
  const easyQuestions = DeFiData.defi.easy;
  
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
