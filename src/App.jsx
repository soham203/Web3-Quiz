import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx';
import QuizPage from './pages/Quizpage';
import Navbar from './components/Navbar.jsx';
import SolEasy from './pages/Solidity/easy/SolEasy.jsx'
import SolMedium from './pages/Solidity/medium/SolMedium.jsx'
import SolHard from './pages/Solidity/hard/SolHard.jsx'

function App() {

  return (

    <BrowserRouter>
      <Navbar/>
    <Routes>
    <Route path="/" element={<LandingPage/>}/>
      <Route path="/landingPage" element={<LandingPage/>}/>
      <Route path="/quizpage" element={<QuizPage/>}/>
      <Route path="/solEasy" element={<SolEasy/>} />
      <Route path="/solMedium" element={<SolMedium/>} />
      <Route path="/solHard" element={<SolHard/>} />
    </Routes>
    </BrowserRouter>

  )
}

export default App;
