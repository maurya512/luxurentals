// import dependencies
import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

// import files/components
import Hero from './components/Hero'
import { GlobalStyle } from './globalstyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
    </Router>
  );
}

export default App;
