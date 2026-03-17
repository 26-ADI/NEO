import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;