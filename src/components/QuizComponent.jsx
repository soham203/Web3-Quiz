import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuestionComp from './QuestionComp';

const QuizComponent = () => {
  const { topic, difficulty } = useParams(); // Get topic and difficulty from URL params
  const [questions, setQuestions] = useState([]); // Store questions filtered by difficulty
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(5); // Show 5 questions per page
  const [selectedOptions, setSelectedOptions] = useState({}); // State for selected options

  // Dynamically load the JSON file for the topic
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await import(`../data/${topic}Data.json`);
        console.log('Loaded Data:', data);
        
        if (data.default && data.default[difficulty]) {
          const filteredQuestions = data.default[difficulty]; 
          setQuestions(filteredQuestions);
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
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion); // Show 5 questions per page

  // Pagination controls
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber); // Change page number

  return (
    <div className="bg-black min-h-screen">
      <h1 className="text-center text-4xl text-white mt-10">
        {topic.toUpperCase()} - {difficulty.toUpperCase()} Quiz
      </h1>

      {currentQuestions.length > 0 ? (
        currentQuestions.map((question, index) => (
          <QuestionComp
            key={question.id || index}
            question={question}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        ))
      ) : (
        <p className="text-white text-center mt-10">No questions available</p>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center my-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-2 mx-1 ${currentPage === i + 1 ? 'bg-purple-700' : 'bg-purple-500'} text-white rounded`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizComponent;
