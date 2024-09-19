import './App.css';
import { useState } from 'react'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Destinations from './pages/Destinations';
import DestinationPage from './pages/DestinationPage';
import Hotels from './pages/Hotels';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Restaurants from './pages/Restaurants';



// Store any needed parent state and the routing options.
// Wrap in Router, then use Routes to define routes.

function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/destinations/:destination" element={<DestinationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
