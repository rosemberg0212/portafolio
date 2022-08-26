import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './sass/main.css';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
