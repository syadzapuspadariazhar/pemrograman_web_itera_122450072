import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import Home from './pages/Home';
import Stats from './pages/Stats';
import './App.css';

function App() {
  return (
    // Menyediakan konteks global ke seluruh aplikasi
    <BookProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Router>
    </BookProvider>
  );
}

export default App;