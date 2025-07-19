import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import './App.css'

function App() {
  
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes> 
     </Router>         
    </>
  )
}

export default App
