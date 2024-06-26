import React, { useState } from 'react';
// const components = "components-cluade"
import Navbar from './components-cluade/navbar';
import FoodBuilder from './components-cluade/foodBuilder';
import { ingredients } from './data/ingredients';
import './App.css';

function AppClaude() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [currentFood, setCurrentFood] = useState('salad');

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    document.documentElement.lang = lang;
    document.body.style.direction = lang === 'he' ? 'rtl' : 'ltr';
  };

  return (
    <div className={`App ${currentLanguage}`}>
      <select id="languageSelect" onChange={(e) => changeLanguage(e.target.value)} value={currentLanguage}>
        <option value="en">English</option>
        <option value="he">עברית</option>
      </select>
      <Navbar 
        currentFood={currentFood} 
        setCurrentFood={setCurrentFood}
        currentLanguage={currentLanguage}
      />
      <FoodBuilder 
        foodType={currentFood}
        ingredients={ingredients[currentFood]}
        currentLanguage={currentLanguage}
      />
    </div>
  );
}

export default AppClaude;