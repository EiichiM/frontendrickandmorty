import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CContainer from "./components/cards";
import Hero from "./components/Hero"




function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='filtros-container'>
        <CContainer />
      </div>

    </div>
  );
}

export default App;