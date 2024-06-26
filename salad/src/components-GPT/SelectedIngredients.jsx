import React from 'react';

const SelectedIngredients = ({ ingredients, updateIngredientAmount, removeIngredient }) => {
  return (
    <div className="selected-ingredients">
      <h2>Selected Ingredients</h2>
      <table>
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Amount (g)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient) => (
            <tr key={ingredient.name}>
              <td>{ingredient.name}</td>
              <td>
                <input
                  type="number"
                  className="input-amount"
                  value={ingredient.amount}
                  onChange={(e) => updateIngredientAmount(ingredient.name, parseInt(e.target.value))}
                />
              </td>
              <td>
                <button onClick={() => removeIngredient(ingredient.name)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedIngredients;
