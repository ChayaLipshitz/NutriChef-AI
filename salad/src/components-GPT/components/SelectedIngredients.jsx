import React from 'react';

const SelectedIngredients = ({ ingredients, updateIngredientAmount, removeIngredient, text }) => {
  return (
    <div className="selected-ingredients">
      <h2>{text.selectedIngredients}</h2>
      <table>
        <thead>
          <tr>
            <th>{text.ingredients}</th>
            <th>{text.totalWeight} (g)</th>
            <th>{text.actions}</th>
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
                <button onClick={() => removeIngredient(ingredient.name)}>{text.remove}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedIngredients;
