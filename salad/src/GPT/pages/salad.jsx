import React, { useState, useContext } from 'react';
import IngredientList from '../components/IngredientList';
import SelectedIngredients from '../components/SelectedIngredients';
import NutritionSummary from '../components/NutritionSummary';
import { LanguageContext } from '../LanguageContext';

const saladIngredients = {
    en: [
      { name: 'Chicken Breast', calories: 165, fats: 3.6, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'Olive Oil', calories: 884, fats: 100, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'Almonds', calories: 579, fats: 49.9, sugar: 4.4, carbs: 21.6, fiber: 12.5 },
      { name: 'Lettuce', calories: 15, fats: 0.2, sugar: 0.8, carbs: 2.9, fiber: 1.3 },
      { name: 'Tomato', calories: 18, fats: 0.2, sugar: 2.6, carbs: 3.9, fiber: 1.2 },
      { name: 'Cucumber', calories: 16, fats: 0.1, sugar: 1.7, carbs: 3.6, fiber: 0.5 },
      { name: 'Avocado', calories: 160, fats: 14.7, sugar: 0.7, carbs: 8.5, fiber: 6.7 },
      { name: 'Feta Cheese', calories: 264, fats: 21.3, sugar: 0.5, carbs: 4.1, fiber: 0 },
    ],
    he: [
      { name: 'חזה עוף', calories: 165, fats: 3.6, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'שמן זית', calories: 884, fats: 100, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'שקדים', calories: 579, fats: 49.9, sugar: 4.4, carbs: 21.6, fiber: 12.5 },
      { name: 'חסה', calories: 15, fats: 0.2, sugar: 0.8, carbs: 2.9, fiber: 1.3 },
      { name: 'עגבנייה', calories: 18, fats: 0.2, sugar: 2.6, carbs: 3.9, fiber: 1.2 },
      { name: 'מלפפון', calories: 16, fats: 0.1, sugar: 1.7, carbs: 3.6, fiber: 0.5 },
      { name: 'אבוקדו', calories: 160, fats: 14.7, sugar: 0.7, carbs: 8.5, fiber: 6.7 },
      { name: 'גבינת פטה', calories: 264, fats: 21.3, sugar: 0.5, carbs: 4.1, fiber: 0 },
    ]
  };
  

const Salad = () => {
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
      totalWeight: 'Total Salad Weight',
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
      totalWeight: 'משקל סלט כולל',
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
          <IngredientList ingredients={saladIngredients[language]} addIngredient={addIngredient} text={t} />
        </div>
      </div>
      <NutritionSummary ingredients={selectedIngredients} text={t} />
    </div>
  );
};

export default Salad;
