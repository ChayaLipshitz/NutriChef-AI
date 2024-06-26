import React from 'react';

const IngredientList = ({ ingredients, addIngredient, text }) => {
  return (
    <div className="ingredient-list">
      <h2>{text.ingredients}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.name}>
            <div>
              {ingredient.name} 
            </div>
            <button className="add-button" onClick={() => addIngredient(ingredient)}>{text.add}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
