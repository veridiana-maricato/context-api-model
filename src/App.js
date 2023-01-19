import './App.css';
import { Route, Routes, Navigate, BrowserRouter} from 'react-router-dom';

// components
import NavBar from './components/NavBar';

// pages
import About from './pages/About';
import Home from './pages/Home';
import Recepies from './pages/Recepies';


function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <BrowserRouter>
      <NavBar />
        <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/about' element={<About />}>About</Route>
          <Route path='/recepies' element={<Recepies />}>Recepies</Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
