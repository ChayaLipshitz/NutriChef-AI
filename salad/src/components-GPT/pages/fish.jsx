import React, { useState, useContext } from 'react';
import IngredientList from '../components/IngredientList';
import SelectedIngredients from '../components/SelectedIngredients';
import NutritionSummary from '../components/NutritionSummary';
import { LanguageContext } from '../LanguageContext';

const fishIngredients = {
    en: [
      { name: 'Salmon', calories: 208, fats: 13, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'Tuna', calories: 144, fats: 5, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'Trout', calories: 168, fats: 9, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'Cod', calories: 82, fats: 0.7, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'Haddock', calories: 90, fats: 0.6, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'Mackerel', calories: 205, fats: 13.9, sugar: 0, carbs: 0, fiber: 0 },
    ],
    he: [
      { name: 'סלמון', calories: 208, fats: 13, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'טונה', calories: 144, fats: 5, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'פורל', calories: 168, fats: 9, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'בקלה', calories: 82, fats: 0.7, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'הדוק', calories: 90, fats: 0.6, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'מקרל', calories: 205, fats: 13.9, sugar: 0, carbs: 0, fiber: 0 },
    ]
  };
  

const Fish = () => {
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
      totalWeight: 'Total Fish Weight',
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
      totalWeight: 'משקל דג כולל',
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
          <IngredientList ingredients={fishIngredients[language]} addIngredient={addIngredient} text={t} />
        </div>
      </div>
      <NutritionSummary ingredients={selectedIngredients} text={t} />
    </div>
  );
};

export default Fish;
