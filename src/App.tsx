import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoadingScreen />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
