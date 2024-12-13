import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuestionComp from './QuestionComp';

const QuizComponent = () => {
  const { topic, difficulty } = useParams(); // Get topic and difficulty from URL params
  const [questions, setQuestions] = useState([]); // Store questions filtered by difficulty
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5; // Show 5 questions per page
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(null); // State to hold score
  const [showScorePopup, setShowScorePopup] = useState(false); // State to control score popup

  // Dynamically load the JSON file for the topic
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await import(`../data/${topic}Data.json`);
        if (data.default && data.default[topic] && data.default[topic][difficulty]) {
          const filteredQuestions = data.default[topic][difficulty];
          setQuestions(filteredQuestions);
          
          // Initialize selectedOptions based on loaded questions
          const initialSelectedOptions = {};
          filteredQuestions.forEach(question => {
            initialSelectedOptions[question.id] = null; // Initialize with null or default value
          });
          setSelectedOptions(initialSelectedOptions);
        } else {
          console.error(`No questions found for topic: ${topic} and difficulty: ${difficulty}`);
        }
      } catch (error) {
        console.error('Error loading questions:', error);
      }
    };

    loadQuestions();
  }, [topic, difficulty]);

  // Pagination logic
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  // Calculate score on submit
  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((question) => {
      if (selectedOptions[question.id] === question.answer) {
        calculatedScore += 1; // Increment score for each correct answer
      }
    });
    setScore(calculatedScore);
    setShowScorePopup(true); // Show score popup
  };

  return (
    <div className="bg-black min-h-screen flex flex-col">
    

      {currentQuestions.length > 0 ? (
        currentQuestions.map((question) => (
          <QuestionComp
            key={question.id}
            question={question}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        ))
      ) : (
        <p className="text-white text-center mt-10">No questions available</p>
      )}
      
      {/* Submit button - appears only on the last page */}
      {currentPage === Math.ceil(questions.length / questionsPerPage) && (
        <div className="flex justify-center mt-4">
          <button 
            onClick={handleSubmit} 
            className="text-[#8E44AD] bg-white p-2 rounded-xl font-bold hover:border-2 hover:border-[#8E44AD]"
          >
            Submit
          </button>
        </div>
      )}
      
      {/* Pagination Controls */}
      <div className="flex justify-center my-4">
        {Array.from({ length: Math.ceil(questions.length / questionsPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-2 mx-1 ${currentPage === i + 1 ? 'bg-purple-700' : 'bg-purple-500'} text-white rounded`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Score Popup */}
      {showScorePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">Your Score</h2>
            <p className="text-xl">{score} out of {questions.length}</p>
            <button 
              onClick={() => setShowScorePopup(false)} 
              className="mt-4 bg-[#8E44AD] text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
