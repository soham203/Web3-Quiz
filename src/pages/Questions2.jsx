import React, { useState } from 'react';
import QuestionComp from '../components/QuestionComp';
import quizData from '../data/quizData.json';

export default function Questions2() {
  const [selectedOptions, setSelectedOptions] = useState({});
   
  const questionsPerPage = 5;
   
  const currentQuestions = quizData.questions.slice(5,5 + questionsPerPage);

  return (
    <div>
      {currentQuestions.map((question) => (
        <div key={question.id}>
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