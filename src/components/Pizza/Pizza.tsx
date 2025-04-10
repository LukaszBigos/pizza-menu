import React from "react";
import { pizzaData as pizzas } from "../../data";
export const Pizza = () => {
  return (
    <div>
      <h2>{pizzas[0].name}</h2>
      <p>{pizzas[0].description}</p>
      <p>{pizzas[0].price}</p>
      <img src={pizzas[0].photoName} alt={pizzas[0].name} />
    </div>
  );
};
