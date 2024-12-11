
import React from 'react';

export default function QuestionComp({ question, selectedOptions, setSelectedOptions }) {
  const handleOptionChange = (event) => {
    setSelectedOptions({
      ...selectedOptions,
      [question.id]: event.target.value, // Update selected option for this question
    });
  };

  return (
    <div className="bg-black flex items-center justify-center">
      <div className="bg-[#8E44AD] rounded-lg p-6 h-fit sm:w-6/12 m-5 hover:border-2 border-white">
        <h2 className="text-2xl font-bold mb-4 text-white">{question.question}</h2> {/* Display the question text */}

        <ul className="space-y-2 text-lg font-semibold">
          {question.options.map((option, index) => (
            <li key={index} className="flex items-center">
              <input
                type="radio"
                id={`option${index + 1}-${question.id}`}
                name={`question-${question.id}`}
                value={option}
                checked={selectedOptions[question.id] === option}
                onChange={handleOptionChange}
                className="mr-2 w-4 h-4 bg-gray-100"
              />
              <label htmlFor={`option${index + 1}-${question.id}`}>{option}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}