import React, { useState } from 'react';
import QuestionComp from '../../../components/QuestionComp';
import zerokwg from '../../../data/zerokwg.json';

 export default function ZeRoHard2() {
  const [selectedOptions, setSelectedOptions] = useState({});
  
  const questionsPerPage = 5;

  // Filter for easy questions
  const hardQuestions = zerokwg.zeroknowledgeproof.hard;
  // Get the current set of easy questions to display
  const currentQuestions = hardQuestions.slice(0, questionsPerPage);

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
