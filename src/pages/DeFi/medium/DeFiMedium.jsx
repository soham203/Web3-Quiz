import React, { useState } from 'react';
import QuestionComp from '../../../components/QuestionComp';
import DeFiData from '../../../data/defiData.json';

 export default function DeFMedium() {
  const [selectedOptions, setSelectedOptions] = useState({});
  
  const questionsPerPage = 5;

  // Filter for easy questions
  const mediumQuestions = DeFiData.defi.medium;
  
  // Get the current set of easy questions to display
  const currentQuestions = mediumQuestions.slice(0, questionsPerPage);

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
