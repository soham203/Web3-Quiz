import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import QuizPage from './pages/Quizpage.jsx';
import Navbar from './components/Navbar.jsx';
import QuizComponent from './components/QuizComponent.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/quizpage" element={<QuizPage />} />
        
        {/* Corrected Route */}
        <Route path="/quiz/:topic/:difficulty" element={<QuizComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
