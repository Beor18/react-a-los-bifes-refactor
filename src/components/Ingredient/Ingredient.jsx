import React from "react";
import RemoveIngredientButton from "../../components/RemoveIngredientButton/RemoveIngredientButton";

const Ingredient = ingredient => {
  return (
    <li>
      <div className="ingredient-item">
        <span>{ingredient}</span>
        {/* <RemoveIngredientButton
          handleRemove={() => props.handleRemove(props.ingredient.position)}
        /> */}
      </div>
    </li>
  );
};

export default Ingredient;
