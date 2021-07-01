import React from "react";
import Meal from "./Meal";

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <main>
      <section className="nutrients">
        <ul>
          <li>
            Calories: <strong>{nutrients.calories.toFixed(0)}</strong>
          </li>
          <li>
            Carbohydrates: <strong>{nutrients.carbohydrates.toFixed(0)}</strong>
          </li>
          <li>
            Fat: <strong>{nutrients.fat.toFixed(0)}</strong>
          </li>
          <li>
            Protein: <strong>{nutrients.protein.toFixed(0)}</strong>
          </li>
        </ul>
      </section>

      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}
