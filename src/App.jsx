import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx';
import QuizPage from './pages/Quizpage';
import Navbar from './components/Navbar.jsx';

import SolEasy from './pages/Solidity/easy/SolEasy.jsx'
import SolMedium from './pages/Solidity/medium/SolMedium.jsx'
import SolHard from './pages/Solidity/hard/SolHard.jsx'

import RustEasy from './pages/Rust/easy/RustEasy.jsx';
import RustMedium from './pages/Rust/medium/RustMedium.jsx'; 
import RustHard from './pages/Rust/hard/RustHard.jsx'; 

import DeFiEasy from './pages/DeFi/easy/DeFiEasy.jsx'; 
import DeFiMedium from './pages/DeFi/medium/DeFiMedium.jsx'; 
import DeFiHard from './pages/DeFi/hard/DeFiHard.jsx'; 

import ZeroEasy from './pages/ZeroKnd/easy/ZeRoEasy.jsx'; 
import ZeroMedium from './pages/ZeroKnd/medium/ZeRoMedium.jsx'; 
import ZeroHard from './pages/ZeroKnd/hard/ZeRoHard.jsx'; 

function App() {

  return (

    <BrowserRouter>
      <Navbar/>
    <Routes>
    <Route path="/" element={<LandingPage/>}/>
      <Route path="/landingPage" element={<LandingPage/>}/>
      <Route path="/quizpage" element={<QuizPage/>}/>
      
        {/* Solidity routes */}
        <Route path="/solidity/easy" element={<SolEasy/>} />
        <Route path="/solidity/medium" element={<SolMedium/>} />
        <Route path="/solidity/hard" element={<SolHard/>} />

       {/* Rust routes */}
        <Route path="/rust/easy" element={<RustEasy />} />
        <Route path="/rust/medium" element={<RustMedium />} />
        <Route path="/rust/hard" element={<RustHard />} />

        {/* DeFi routes */}
        <Route path="/defi/easy" element={<DeFiEasy />} />
        <Route path="/defi/medium" element={<DeFiMedium />} />
        <Route path="/defi/hard" element={<DeFiHard />} />

        {/* ZeroKnowledge routes */}
        <Route path="/zeroKnowledgeproof/easy" element={<ZeroEasy />} />
        <Route path="/zeroKnowledgeproof/medium" element={<ZeroMedium />} />
        <Route path="/zeroKnowledgeproof/hard" element={<ZeroHard />} />


    </Routes>
    </BrowserRouter>

  )
}

export default App;
