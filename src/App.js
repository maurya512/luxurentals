// import dependencies
import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import Feature from './components/Feature';

// import files/components
import Hero from './components/Hero'
import Products from './components/Products';
import { productData } from './components/Products/data';
import { GlobalStyle } from './globalstyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your fav' data={productData}/>
      <Feature />
    </Router>
  );
}

export default App;
