
import './App.css'
import Footer from './components/Layout/Footer'
import Navbar from './components/Layout/Navbar'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
