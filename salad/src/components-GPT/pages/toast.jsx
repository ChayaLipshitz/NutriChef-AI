import React, { useState, useContext } from 'react';
import IngredientList from '../components/IngredientList';
import SelectedIngredients from '../components/SelectedIngredients';
import NutritionSummary from '../components/NutritionSummary';
import { LanguageContext } from '../LanguageContext';

const toastIngredients = {
    en: [
      { name: 'Whole Wheat Bread', calories: 247, fats: 3.6, sugar: 6.3, carbs: 41.4, fiber: 6 },
      { name: 'Butter', calories: 717, fats: 81, sugar: 0.1, carbs: 0.1, fiber: 0 },
      { name: 'Cheese', calories: 402, fats: 33.1, sugar: 0.5, carbs: 1.3, fiber: 0 },
      { name: 'Tomato', calories: 18, fats: 0.2, sugar: 2.6, carbs: 3.9, fiber: 1.2 },
      { name: 'Avocado', calories: 160, fats: 14.7, sugar: 0.7, carbs: 8.5, fiber: 6.7 },
      { name: 'Ham', calories: 145, fats: 5.5, sugar: 0.6, carbs: 1.5, fiber: 0 },
    ],
    he: [
      { name: 'לחם מחיטה מלאה', calories: 247, fats: 3.6, sugar: 6.3, carbs: 41.4, fiber: 6 },
      { name: 'חמאה', calories: 717, fats: 81, sugar: 0.1, carbs: 0.1, fiber: 0 },
      { name: 'גבינה', calories: 402, fats: 33.1, sugar: 0.5, carbs: 1.3, fiber: 0 },
      { name: 'עגבנייה', calories: 18, fats: 0.2, sugar: 2.6, carbs: 3.9, fiber: 1.2 },
      { name: 'אבוקדו', calories: 160, fats: 14.7, sugar: 0.7, carbs: 8.5, fiber: 6.7 },
      { name: 'חזיר', calories: 145, fats: 5.5, sugar: 0.6, carbs: 1.5, fiber: 0 },
    ]
  };
  

const Toast = () => {
  const { language } = useContext(LanguageContext);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const addIngredient = (ingredient) => {
    setSelectedIngredients([...selectedIngredients, { ...ingredient, amount: 100 }]);
  };

  const updateIngredientAmount = (name, amount) => {
    setSelectedIngredients(
      selectedIngredients.map((ingredient) =>
        ingredient.name === name ? { ...ingredient, amount } : ingredient
      )
    );
  };

  const removeIngredient = (name) => {
    setSelectedIngredients(selectedIngredients.filter((ingredient) => ingredient.name !== name));
  };

  const text = {
    en: {
      ingredients: 'Ingredients',
      selectedIngredients: 'Selected Ingredients',
      nutritionSummary: 'Nutrition Summary',
      calories: 'Calories',
      fats: 'Fats',
      sugar: 'Sugar',
      carbs: 'Carbs',
      fiber: 'Fiber',
      totalWeight: 'Total Toast Weight',
      add: 'Add',
      remove: 'Remove',
    },
    he: {
      ingredients: 'מרכיבים',
      selectedIngredients: 'מרכיבים נבחרים',
      nutritionSummary: 'סיכום תזונתי',
      calories: 'קלוריות',
      fats: 'שומנים',
      sugar: 'סוכר',
      carbs: 'פחמימות',
      fiber: 'סיבים',
      totalWeight: 'משקל טוסט כולל',
      add: 'הוסף',
      remove: 'הסר',
    },
  };

  const t = text[language];

  return (
    <div className={`app ${language === 'he' ? 'rtl' : ''}`}>
      <div className="container">
        <div className="left-section">
          <SelectedIngredients
            ingredients={selectedIngredients}
            updateIngredientAmount={updateIngredientAmount}
            removeIngredient={removeIngredient}
            text={t}
          />
        </div>
        <div className="right-section">
          <IngredientList ingredients={toastIngredients[language]} addIngredient={addIngredient} text={t} />
        </div>
      </div>
      <NutritionSummary ingredients={selectedIngredients} text={t} />
    </div>
  );
};

export default Toast;
