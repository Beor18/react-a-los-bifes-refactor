import React from "react";
import { randomIngredient } from "../../lib/ingredients";

import AddIngredientButton from "../../components/AddIngredientButton/AddIngredientButton";
import Ingredient from "../../components/Ingredient/Ingredient";

const IngredientsList = () => {
  const [ingredients, setIngredient] = React.useState([]);

  const addIngredient = () => {
    const newIngredient = randomIngredient();

    const newState = {
      ingredients: newIngredient
    };

    setIngredient(newState);
  };

  const removeIngredient = ingredientPos => {
    const newState = {
      ingredients: ingredients.filter(i => i.position !== ingredientPos)
    };

    setIngredient(newState);
  };

  React.useEffect(() => {
    addIngredient();
  }, []);

  return (
    <div className="ingredients-container">
      <ul className="ingredients-list">
        {ingredients.length > 0
          ? ingredients.map((ing, i) => (
              <Ingredient
                key={i}
                ingredient={ing}
                handleRemove={removeIngredient}
              />
            ))
          : null}
      </ul>
      <AddIngredientButton handleAdd={addIngredient} />
    </div>
  );
};

export default IngredientsList;
