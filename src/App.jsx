  import React from 'react';
  import './App.css'; // Make sure to create a CSS file for your styles
  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import { LoginPage } from './pages/login';
  import { HomePage } from './pages/HomePage';
  import { Cricket } from './pages/cricket';
  import { Football } from './pages/football';
  import { Tennis } from './pages/tennis';
  import { Swimming } from './pages/Swimming';
  import { Trekking } from './pages/trekking';
  import { Cycling } from './pages/cycling';
  // import {ContactPage} from './pages/ContactPage';

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/cricket' element={<Cricket />} />
          <Route path='/football' element={<Football />} />
          <Route path='/tennis' element={<Tennis />} />
          <Route path='/swimming' element={<Swimming />} />
          <Route path='/trekking' element={<Trekking />} />
          <Route path='/cycling' element={<Cycling />} />
          {/* <Route path="/ContactPage" element={<ContactPage />} />  */}
        </Routes>
      </BrowserRouter>
      
    );
    
    
  }


  export default App;