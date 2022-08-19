import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Selectre from './pages/Selectre';
import Otp from './pages/Otp';
import Registerfront from './pages/Registerfront';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='container'>
          <Routes>
            <Route exact path="/" element={
              <div>
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <button ><Link to='/Selectre'>Register</Link></button>
                </header>
              </div>
            } />
            <Route path='/Selectre' element={<Selectre />} />
            <Route path='/Otp' element={<Otp />} />
            <Route path='/Registerfront' element={<Registerfront />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

