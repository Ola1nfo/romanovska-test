import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoadingScreen />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
