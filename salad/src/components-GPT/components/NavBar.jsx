import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const { language } = useContext(LanguageContext);
  const text = {
    en: { salad: 'Salad', soup: 'Soup', meat: 'Meat', fish: 'Fish', toast: 'Toast' },
    he: { salad: 'סלט', soup: 'מרק', meat: 'בשר', fish: 'דג', toast: 'טוסט' }
  };
  const t = text[language];

  return (
    <nav className="navbar">
      <NavLink to="/salad">{t.salad}</NavLink>
      <NavLink to="/soup">{t.soup}</NavLink>
      <NavLink to="/meat">{t.meat}</NavLink>
      <NavLink to="/fish">{t.fish}</NavLink>
      <NavLink to="/toast">{t.toast}</NavLink>
    </nav>
  );
};

export default Navbar;
