import React from "react";

export default function AddIngredientButton(handleAdd) {
  return (
    <button
      onClick={e => {
        return handleAdd;
      }}
    >
      Agregar
    </button>
  );
}
