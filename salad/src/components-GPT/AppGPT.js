import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Salad from './pages/salad';
import Soup from './pages/soup';
import Meat from './pages/meat';
import Fish from './pages/fish';
import Toast from './pages/toast';
import Navbar from './components/NavBar';
import { LanguageContext, LanguageProvider } from './LanguageContext';
import './styles.css';

function App() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (

    <Router>
      <Navbar />

      <div className={`app ${language === 'he' ? 'rtl' : ''}`}>
        <div className="header">
          <h1>{language === 'en' ? 'Build Your Perfect Dish' : 'בנה את המנה המושלמת שלך'}</h1>
          <select onChange={(e) => toggleLanguage(e.target.value)} value={language}>
            <option value="en">English</option>
            <option value="he">עברית</option>
          </select>
        </div>
        <Routes>
          <Route path="/salad" element={<Salad/>} />
          <Route path="/soup" element={<Soup/>} />
          <Route path="/meat" element={<Meat/>} />
          <Route path="/fish" element={<Fish/>} />
          <Route path="/toast" element={<Toast/>} />
          <Route path="/" element={<Salad/>} />
        </Routes>
      </div>
    </Router>
  );
}

function WrappedApp() {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
}

export default WrappedApp;
