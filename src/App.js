import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './sass/main.css';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
