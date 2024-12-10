import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx';
import QuizPage from './pages/Quizpage';
import Navbar from './components/Navbar.jsx';
import Questions from './pages/Questions.jsx';
import Questions2 from './pages/Questions2.jsx';
import SolidityEasy from './pages/Rust/easy/solidityEasy';
function App() {

  return (

    <BrowserRouter>
      <Navbar/>
    <Routes>
    <Route path="/" element={<LandingPage/>}/>
      <Route path="/landingPage" element={<LandingPage/>}/>
      <Route path="/quizpage" element={<QuizPage/>}/>
      <Route path="/questions" element={<Questions/>}/>
      <Route path="/questions2" element={<Questions2/>}/>
      <Route path="/solidityEasy" element={<SolidityEasy />} />
    </Routes>
    </BrowserRouter>

  )
}

export default App;
