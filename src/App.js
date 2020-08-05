import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <About />
      <Contact />
      <Introduction />
      <Projects />
      <Sidebar />
    </div>
  );
}

export default App;
