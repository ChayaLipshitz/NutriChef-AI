import React from 'react';

const NutritionSummary = ({ ingredients }) => {
  const totalNutrition = ingredients.reduce(
    (acc, ingredient) => {
      const factor = ingredient.amount / 100;
      return {
        calories: acc.calories + ingredient.calories * factor,
        fats: acc.fats + ingredient.fats * factor,
        sugar: acc.sugar + ingredient.sugar * factor,
        carbs: acc.carbs + ingredient.carbs * factor,
        fiber: acc.fiber + ingredient.fiber * factor,
      };
    },
    { calories: 0, fats: 0, sugar: 0, carbs: 0, fiber: 0 }
  );

  return (
    <div className="nutrition-summary">
      <h2>Nutrition Summary</h2>
      <p>Calories: {totalNutrition.calories.toFixed(2)} kcal</p>
      <p>Fats: {totalNutrition.fats.toFixed(2)} g</p>
      <p>Sugar: {totalNutrition.sugar.toFixed(2)} g</p>
      <p>Carbs: {totalNutrition.carbs.toFixed(2)} g</p>
      <p>Fiber: {totalNutrition.fiber.toFixed(2)} g</p>
    </div>
  );
};

export default NutritionSummary;
