import React from 'react';

export default function QuestionComp({ question, selectedOptions, setSelectedOptions, submitted }) {
  const handleOptionClick = (option) => {
    setSelectedOptions({
      ...selectedOptions,
      [question.id]: option,
    });
  };

  return (
    <div className="bg-black flex items-center justify-center">
      <div className="bg-[#8E44AD] rounded-lg p-6 h-fit sm:w-6/12 m-5 hover:border-2 border-white">
        <h2 className="text-2xl font-bold mb-4 text-white">{question.question}</h2>

        <ul className="space-y-2 text-lg font-semibold">
          {question.options.map((option, index) => {
            const isSelected = selectedOptions[question.id] === option;
            const isCorrect = question.answer === option; 
            
            // **Apply logic only if quiz is submitted**
            const optionClasses = submitted 
              ? isCorrect 
                ? 'border-4 border-green-500 bg-white text-[#8E44AD]' // **Correct answers are green**
                : isSelected 
                  ? 'border-4 border-red-500 bg-white text-[#8E44AD]' // **Incorrect selected options are red**
                  : 'bg-white text-[#8E44AD]' // Default option style
              : isSelected 
                ? 'bg-white text-[#8E44AD]' // Option is selected but quiz not submitted
                : 'bg-white text-[#8E44AD] hover:text-[#bc82d5]'; // Default style

            return (
              <li
                key={index}
                className={`flex items-center p-2 rounded-md ${optionClasses}`}
                onClick={() => handleOptionClick(option)}
              >
                <div className='flex items-center'>
                  <input
                    type="radio"
                    id={`option${index + 1}-${question.id}`}
                    name={`question-${question.id}`}
                    value={option}
                    checked={selectedOptions[question.id] === option}
                    readOnly // **Make input read-only to avoid re-selection**
                    className="mr-2 w-3 h-3 appearance-none border-2 border-gray-300 rounded-full checked:bg-[#8E44AD] focus:outline-none"
                  />
                  <label htmlFor={`option${index + 1}-${question.id}`}>{option}</label>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
