import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
      <Header />
     <main> 
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes> 
     </Router>   
     </main> 
     <Footer />      
    </>
  )
}

export default App
