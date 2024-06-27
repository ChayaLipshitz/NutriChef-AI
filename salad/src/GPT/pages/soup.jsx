import React, { useState, useContext } from 'react';
import IngredientList from '../components/IngredientList';
import SelectedIngredients from '../components/SelectedIngredients';
import NutritionSummary from '../components/NutritionSummary';
import { LanguageContext } from '../LanguageContext';

const soupIngredients = {
    en: [
      { name: 'Carrot', calories: 41, fats: 0.2, sugar: 4.7, carbs: 9.6, fiber: 2.8 },
      { name: 'Potato', calories: 77, fats: 0.1, sugar: 0.8, carbs: 17.5, fiber: 2.2 },
      { name: 'Onion', calories: 40, fats: 0.1, sugar: 4.2, carbs: 9.3, fiber: 1.7 },
      { name: 'Celery', calories: 16, fats: 0.2, sugar: 1.8, carbs: 3.0, fiber: 1.6 },
      { name: 'Garlic', calories: 149, fats: 0.5, sugar: 1.0, carbs: 33.1, fiber: 2.1 },
      { name: 'Tomato', calories: 18, fats: 0.2, sugar: 2.6, carbs: 3.9, fiber: 1.2 },
      { name: 'Chicken Broth', calories: 1, fats: 0, sugar: 0, carbs: 0.1, fiber: 0 },
    ],
    he: [
      { name: 'גזר', calories: 41, fats: 0.2, sugar: 4.7, carbs: 9.6, fiber: 2.8 },
      { name: 'תפוח אדמה', calories: 77, fats: 0.1, sugar: 0.8, carbs: 17.5, fiber: 2.2 },
      { name: 'בצל', calories: 40, fats: 0.1, sugar: 4.2, carbs: 9.3, fiber: 1.7 },
      { name: 'סלרי', calories: 16, fats: 0.2, sugar: 1.8, carbs: 3.0, fiber: 1.6 },
      { name: 'שום', calories: 149, fats: 0.5, sugar: 1.0, carbs: 33.1, fiber: 2.1 },
      { name: 'עגבנייה', calories: 18, fats: 0.2, sugar: 2.6, carbs: 3.9, fiber: 1.2 },
      { name: 'מרק עוף', calories: 1, fats: 0, sugar: 0, carbs: 0.1, fiber: 0 },
    ]
  };
  

const Soup = () => {
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
      totalWeight: 'Total Soup Weight',
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
      totalWeight: 'משקל מרק כולל',
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
          <IngredientList ingredients={soupIngredients[language]} addIngredient={addIngredient} text={t} />
        </div>
      </div>
      <NutritionSummary ingredients={selectedIngredients} text={t} />
    </div>
  );
};

export default Soup;
