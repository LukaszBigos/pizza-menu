import React from "react";
import { Pizza } from "../Pizza/Pizza.tsx";
import { pizzaData } from "../../data";

const Menu = () => {
  const pizzas = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizza={pizza} />
          ))}
        </ul>
      ) : (
        <p>Sorry, no pizzas available</p>
      )}
    </main>
  );
};

export default Menu;
