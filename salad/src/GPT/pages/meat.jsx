import React, { useState, useContext } from 'react';
import IngredientList from '../components/IngredientList';
import SelectedIngredients from '../components/SelectedIngredients';
import NutritionSummary from '../components/NutritionSummary';
import { LanguageContext } from '../LanguageContext';

const meatIngredients = {
    en: [
      { name: 'Beef', calories: 250, fats: 15, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'Pork', calories: 242, fats: 14, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'Lamb', calories: 294, fats: 21, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'Turkey', calories: 189, fats: 7.4, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'Chicken Thigh', calories: 209, fats: 11.2, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'Veal', calories: 172, fats: 8, sugar: 0, carbs: 0, fiber: 0 },
    ],
    he: [
      { name: 'בקר', calories: 250, fats: 15, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'כבש', calories: 294, fats: 21, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'הודו', calories: 189, fats: 7.4, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'ירך עוף', calories: 209, fats: 11.2, sugar: 0, carbs: 0, fiber: 0 },
      { name: 'עגל', calories: 172, fats: 8, sugar: 0, carbs: 0, fiber: 0 },
    ]
  };
  

const Meat = () => {
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
      totalWeight: 'Total Meat Weight',
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
      totalWeight: 'משקל בשר כולל',
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
          <IngredientList ingredients={meatIngredients[language]} addIngredient={addIngredient} text={t} />
        </div>
      </div>
      <NutritionSummary ingredients={selectedIngredients} text={t} />
    </div>
  );
};

export default Meat;
