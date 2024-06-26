import React from 'react';

const IngredientList = ({ ingredients, addIngredient }) => {
  return (
    <div className="ingredient-list">
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.name}>
            <div>
              {ingredient.name} (per 100g): {ingredient.calories} kcal, {ingredient.fats}g fats, {ingredient.sugar}g sugar, {ingredient.carbs}g carbs, {ingredient.fiber}g fiber
            </div>
            <button onClick={() => addIngredient(ingredient)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
