import React from 'react';
import './App.css'; // Make sure to create a CSS file for your styles
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;