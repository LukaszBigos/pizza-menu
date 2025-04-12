import React from "react";
import { Pizza } from "../Pizza/Pizza.tsx";
import { pizzaData } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizza={pizza} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
