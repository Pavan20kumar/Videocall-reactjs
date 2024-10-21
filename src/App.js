import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './App.css'
import HomePage from './component/Home page/Homepage.jsx';
import Videopage from './component/Video call page/Videopage.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/room/:roomId" element={<Videopage />} />
        </Routes>
      </BrowserRouter>

      

     
    </div>
  );
}

export default App;
