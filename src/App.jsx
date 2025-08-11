
import './App.css'
import Footer from './components/Layout/Footer'
import Navbar from './components/Layout/Navbar'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PortfolioSection from './pages/PortfolioSection'
import SkillSection from './pages/SkillSection'
import ContactBanner from './pages/ContactBanner'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/portfolio' element={<PortfolioSection />} />
        <Route path='/skills' element={<SkillSection />} />
        <Route path='/about-me' element={<ContactBanner />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
