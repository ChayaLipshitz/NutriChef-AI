import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import SaladBuilder from './components/SaladBuilder';
import SoupBuilder from './components/SoupBuilder';
import MeatBuilder from './components/MeatBuilder';
import FishBuilder from './components/FishBuilder';
import ToastBuilder from './components/ToastBuilder';
// import './App.css';

function AppClaude() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
  };

  return (
    <Router>
      <div className={`App ${language}`}>
        <nav>
          <ul>
            <li><Link to="/salad">{language === 'en' ? 'Salad' : 'סלט'}</Link></li>
            <li><Link to="/soup">{language === 'en' ? 'Soup' : 'מרק'}</Link></li>
            <li><Link to="/meat">{language === 'en' ? 'Meat' : 'בשר'}</Link></li>
            <li><Link to="/fish">{language === 'en' ? 'Fish' : 'דג'}</Link></li>
            <li><Link to="/toast">{language === 'en' ? 'Toast' : 'טוסט'}</Link></li>
          </ul>
          <button onClick={toggleLanguage}>
            {language === 'en' ? 'עברית' : 'English'}
          </button>
        </nav>

        <Routes>
          <Route path="/salad" element={<SaladBuilder language={language} />} />
          <Route path="/soup" element={<SoupBuilder language={language} />} />
          <Route path="/meat" element={<MeatBuilder language={language} />} />
          <Route path="/fish" element={<FishBuilder language={language} />} />
          <Route path="/toast" element={<ToastBuilder language={language} />} />
          <Route path="/" element={<SaladBuilder language={language} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppClaude;