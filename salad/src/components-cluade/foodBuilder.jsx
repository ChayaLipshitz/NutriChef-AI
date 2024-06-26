import React, { useState } from 'react';

function FoodBuilder({ foodType, ingredients, currentLanguage }) {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const translations = {
    en: {
      mainTitle: "Sculptor: Craft Your Perfect Bowl",
      ingredientsTitle: "Ingredient Library",
      bowlTitle: "Your Bowl",
      ingredientHeader: "Ingredient",
      amountHeader: "Amount (g)",
      actionHeader: "Action",
      nutritionTitle: "Nutritional Information",
      addButton: "Add",
      removeButton: "Remove",
      totalBowlSize: "Total Bowl Size"
    },
    he: {
      mainTitle: " סקולפטור: עצב את המנה המושלמת שלך",
      ingredientsTitle: "ספריית מרכיבים",
      bowlTitle: "הקערה שלך",
      ingredientHeader: "מרכיב",
      amountHeader: "כמות (גרם)",
      actionHeader: "פעולה",
      nutritionTitle: "מידע תזונתי",
      addButton: "הוסף",
      removeButton: "הסר",
      totalBowlSize: "גודל קערה כולל"
    }
  };

  const addIngredient = (ingredient) => {
    setSelectedIngredients([...selectedIngredients, { ...ingredient, amount: 100 }]);
  };

  const removeIngredient = (index) => {
    const newIngredients = [...selectedIngredients];
    newIngredients.splice(index, 1);
    setSelectedIngredients(newIngredients);
  };

  const updateAmount = (index, amount) => {
    const newIngredients = [...selectedIngredients];
    newIngredients[index].amount = Number(amount);
    setSelectedIngredients(newIngredients);
  };

  const calculateNutrition = () => {
    const totals = {
      calories: 0, protein: 0, fat: 0, carbs: 0, fiber: 0, sugar: 0, weight: 0
    };

    selectedIngredients.forEach(ingredient => {
      const factor = ingredient.amount / 100;
      Object.keys(totals).forEach(key => {
        if (key !== 'weight') {
          totals[key] += ingredient[key] * factor;
        }
      });
      totals.weight += ingredient.amount;
    });

    return totals;
  };

  const nutritionTotals = calculateNutrition();

  return (
    <div>
      <h1 className="fade-in">{translations[currentLanguage].mainTitle}</h1>
      <div className="container">
        <div className="ingredients-list fade-in">
          <h2>{translations[currentLanguage].ingredientsTitle}</h2>
          <table>
            <tbody>
              {ingredients.map((ingredient) => (
                <tr key={ingredient.name}>
                  <td>{currentLanguage === 'en' ? ingredient.name : ingredient.hebrewName}</td>
                  <td>
                    <button onClick={() => addIngredient(ingredient)}>
                      {translations[currentLanguage].addButton}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="salad-bowl fade-in">
          <h2>{translations[currentLanguage].bowlTitle}</h2>
          <table>
            <thead>
              <tr>
                <th>{translations[currentLanguage].ingredientHeader}</th>
                <th>{translations[currentLanguage].amountHeader}</th>
                <th>{translations[currentLanguage].actionHeader}</th>
              </tr>
            </thead>
            <tbody>
              {selectedIngredients.map((ingredient, index) => (
                <tr key={index}>
                  <td>{currentLanguage === 'en' ? ingredient.name : ingredient.hebrewName}</td>
                  <td>
                    <input
                      type="number"
                      value={ingredient.amount}
                      onChange={(e) => updateAmount(index, e.target.value)}
                    />
                  </td>
                  <td>
                    <button onClick={() => removeIngredient(index)}>
                      {translations[currentLanguage].removeButton}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="nutrition-info fade-in">
        <h2>{translations[currentLanguage].nutritionTitle}</h2>
        <p>
          Calories: {nutritionTotals.calories.toFixed(1)} | 
          Protein: {nutritionTotals.protein.toFixed(1)}g | 
          Fat: {nutritionTotals.fat.toFixed(1)}g | 
          Carbs: {nutritionTotals.carbs.toFixed(1)}g | 
          Fiber: {nutritionTotals.fiber.toFixed(1)}g | 
          Sugar: {nutritionTotals.sugar.toFixed(1)}g
        </p>
        <p>{translations[currentLanguage].totalBowlSize}: {nutritionTotals.weight.toFixed(1)}g</p>
      </div>
    </div>
  );
}

export default FoodBuilder;