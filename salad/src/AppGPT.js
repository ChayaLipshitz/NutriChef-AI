import React, { useState } from 'react';
import IngredientList from './components-GPT/IngredientList';
import SelectedIngredients from './components-GPT/SelectedIngredients';
import NutritionSummary from './components-GPT/NutritionSummary';
import './styles.css';
const ingredientsData = [
    { name: 'Chicken Breast', calories: 165, fats: 3.6, sugar: 0, carbs: 0, fiber: 0 },
    { name: 'Olive Oil', calories: 884, fats: 100, sugar: 0, carbs: 0, fiber: 0 },
    { name: 'Almonds', calories: 579, fats: 49.9, sugar: 4.4, carbs: 21.6, fiber: 12.5 },
    // ... other ingredients
  ];
  
  function App() {
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
  
    return (
      <div className="app">
        <h1>Build Your Perfect Salad Bowl</h1>
        <div className="container">
          <SelectedIngredients
            ingredients={selectedIngredients}
            updateIngredientAmount={updateIngredientAmount}
            removeIngredient={removeIngredient}
          />
          <IngredientList ingredients={ingredientsData} addIngredient={addIngredient} />
        </div>
        <NutritionSummary ingredients={selectedIngredients} />
      </div>
    );
  }
  
  export default App;