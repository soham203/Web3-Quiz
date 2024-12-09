import React from 'react';

export default function QuestionComp({ question, selectedOptions, setSelectedOptions }) {
  const handleOptionChange = (event) => {
    setSelectedOptions({
      ...selectedOptions,
      [question.id]: event.target.value, // Update selected option for this question
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-slate-400 rounded-lg p-6 h-fit w-fit">
        <h2 className="text-2xl font-bold mb-4">{question.question}</h2> {/* Display the question text */}

        <ul className="space-y-2">
          {question.options.map((option, index) => (
            <li key={index} className="flex items-center">
              <input
                type="radio"
                id={`option${index + 1}-${question.id}`}
                name={`question-${question.id}`}
                value={option}
                checked={selectedOptions[question.id] === option}
                onChange={handleOptionChange}
                className="mr-2"
              />
              <label htmlFor={`option${index + 1}-${question.id}`}>{option}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}