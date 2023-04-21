import logo from './logo.svg';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
