import React from 'react';
import Header from './components/Header';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default App;
