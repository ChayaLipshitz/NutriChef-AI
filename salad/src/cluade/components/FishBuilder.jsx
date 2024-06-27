import React, { useState, useEffect } from 'react';

const ingredients = [
  { name: "Salmon fillet", namehe: "פילה סלמון", calories: 208, protein: 20, fat: 13, carbs: 0 },
  { name: "Lemon", namehe: "לימון", calories: 29, protein: 1.1, fat: 0.3, carbs: 9 },
  { name: "Dill", namehe: "שמיר", calories: 43, protein: 3.5, fat: 1.1, carbs: 7 },
  { name: "Rice", namehe: "אורז", calories: 130, protein: 2.7, fat: 0.3, carbs: 28 },
  { name: "Asparagus", namehe: "אספרגוס", calories: 27, protein: 2.9, fat: 0.2, carbs: 5 },
];

function FishBuilder({ language }) {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

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
    newIngredients[index].amount = amount;
    setSelectedIngredients(newIngredients);
  };

  const calculateNutrition = () => {
    return selectedIngredients.reduce((acc, { calories, protein, fat, carbs, amount }) => {
      const factor = amount / 100;
      return {
        calories: acc.calories + calories * factor,
        protein: acc.protein + protein * factor,
        fat: acc.fat + fat * factor,
        carbs: acc.carbs + carbs * factor,
      };
    }, { calories: 0, protein: 0, fat: 0, carbs: 0 });
  };

  return (
    <div>
      <h1>{language === 'en' ? 'Welcome to ' : 'ברוכים הבאים ל'} NutriChef</h1>
      <div className="curly-frame">
        <h2>{language === 'en' ? 'Ingredients' : 'מרכיבים'}</h2>
        <div className="ingredient-list">
          {ingredients.map((ingredient) => (
            <button key={ingredient.name} onClick={() => addIngredient(ingredient)}>
              {language === 'en' ? ingredient.name : ingredient.namehe}
            </button>
          ))}
        </div>
      </div>
      <div className="curly-frame">
        <h2>{language === 'en' ? 'Your meal' : 'המנה שלך'}</h2>
        {selectedIngredients.map((ingredient, index) => (
          <div key={index} className="selected-ingredient">
            <span>{language === 'en' ? ingredient.name : ingredient.namehe}</span>
            <input
              className="amount-input"
              type="number"
              value={ingredient.amount}
              onChange={(e) => updateAmount(index, parseInt(e.target.value))}
              min="0"
            />
            <span>g</span>
            <button onClick={() => removeIngredient(index)}>
              {language === 'en' ? 'Remove' : 'הסר'}
            </button>
          </div>
        ))}
      </div>
      <div className="curly-frame">
        <h2>{language === 'en' ? 'Nutrition Information' : 'מידע תזונתי'}</h2>
        <p>{language === 'en' ? 'Calories' : 'קלוריות'}: {calculateNutrition().calories.toFixed(2)}</p>
        <p>{language === 'en' ? 'Protein' : 'חלבון'}: {calculateNutrition().protein.toFixed(2)}g</p>
        <p>{language === 'en' ? 'Fat' : 'שומן'}: {calculateNutrition().fat.toFixed(2)}g</p>
        <p>{language === 'en' ? 'Carbs' : 'פחמימות'}: {calculateNutrition().carbs.toFixed(2)}g</p>
      </div>
    </div>
  );
}


export default FishBuilder;