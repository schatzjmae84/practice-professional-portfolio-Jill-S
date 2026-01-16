import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage'; 
import LazyBackground from './components/LazyBackground';

function App() {
  
  return (
    <>
      <LazyBackground imageUrl="/portfolio-background-pic.jpg" placeholder="#0e0d0dff" alt="Background" />
      <Header />
      <main> 
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes> 
        </Router>   
     </main> 
     <Footer />      
    </>
  )
}

export default App;
