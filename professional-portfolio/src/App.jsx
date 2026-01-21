import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage'; 

function App() {
  
  return (
    <>
      <div className='app-container'>
        <Header />
          <main className='app-main'> 
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
      <Footer className='app-footer' />  
     </div>
    </>
  )
}

export default App;
