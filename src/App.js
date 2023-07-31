import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <>
    <Router>
      <div className="App">
         <Routes>
            <Route exact path="/search" element={<SearchPage />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;

// 38:45