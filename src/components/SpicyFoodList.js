import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [cuisineFilter, setCuisineFilter] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    setFoods([...foods, newFood]);
  }

  function handleLiClick(id) {
    const newFoods = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      }
      return food;
    });
    setFoods(newFoods);
  }

  const filteredFoods =
    cuisineFilter === "All"
      ? foods
      : foods.filter((food) => food.cuisine === cuisineFilter);
  const foodList = filteredFoods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select
        name="filter"
        value={cuisineFilter}
        onChange={(e) => setCuisineFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;

// function handleLiClick(id) {
//   setFoods(foods.filter((food) => food.id !== id));
// }
