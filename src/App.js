// src/App.js
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvestorFetcher from './investorFetcher';
import InvestorDetails from './investorDetails';

const App = () => {
  return (
    <Router>
      <div className="app">
        <h1>Investor SPA</h1>
        <Routes>
          <Route path="/" element={<InvestorFetcher />} />
          <Route path="/investors/:firmID" element={<InvestorDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

