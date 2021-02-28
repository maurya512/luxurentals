// import dependencies
import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

// import files/components
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <h1>LuxuRentals</h1>
    </Router>
  );
}

export default App;
