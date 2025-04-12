import React from "react";

export const Pizza = ({ pizza }) => {
  return (
    <li className="pizza">
      <div>
        <h3>{pizza.name}</h3>
        <img src={pizza.photoName} alt={pizza.name} />
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
      </div>
    </li>
  );
};
