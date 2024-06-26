import React from 'react';

const NutritionSummary = ({ ingredients, text }) => {
  const totalNutrition = ingredients.reduce(
    (acc, ingredient) => {
      const factor = ingredient.amount / 100;
      return {
        calories: acc.calories + ingredient.calories * factor,
        fats: acc.fats + ingredient.fats * factor,
        sugar: acc.sugar + ingredient.sugar * factor,
        carbs: acc.carbs + ingredient.carbs * factor,
        fiber: acc.fiber + ingredient.fiber * factor,
        weight: acc.weight + ingredient.amount
      };
    },
    { calories: 0, fats: 0, sugar: 0, carbs: 0, fiber: 0, weight: 0 }
  );

  return (
    <div className="nutrition-summary">
      <h2>{text.nutritionSummary}</h2>
      <p>{text.calories}: {totalNutrition.calories.toFixed(2)} kcal</p>
      <p>{text.fats}: {totalNutrition.fats.toFixed(2)} g</p>
      <p>{text.sugar}: {totalNutrition.sugar.toFixed(2)} g</p>
      <p>{text.carbs}: {totalNutrition.carbs.toFixed(2)} g</p>
      <p>{text.fiber}: {totalNutrition.fiber.toFixed(2)} g</p>
      <p>{text.totalWeight}: {totalNutrition.weight.toFixed(2)} g</p>
    </div>
  );
};

export default NutritionSummary;
