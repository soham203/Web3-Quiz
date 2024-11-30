import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx';
import QuizPage from './pages/Quizpage';
function App() {

  return (

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage/>}/>
      <Route path="/landingPage" element={<LandingPage/>}/>
      <Route path="/quizpage" element={<QuizPage/>}/>

    </Routes>
    </BrowserRouter>

  )
}

export default App;
