import React from 'react';

const foodTypes = ['salad', 'soup', 'meat', 'fish', 'toast'];

function Navbar({ currentFood, setCurrentFood, currentLanguage }) {
  const translations = {
    en: {
      salad: 'Salad',
      soup: 'Soup',
      meat: 'Meat',
      fish: 'Fish',
      toast: 'Toast',
    },
    he: {
      salad: 'סלט',
      soup: 'מרק',
      meat: 'בשר',
      fish: 'דג',
      toast: 'טוסט',
    }
  };

  return (
    <nav className="navbar">
      <ul>
        {foodTypes.map(food => (
          <li key={food}>
            <button onClick={() => setCurrentFood(food)}>
              {translations[currentLanguage][food]}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;