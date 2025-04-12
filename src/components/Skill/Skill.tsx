import React from "react";
import "./Skill.css";

const Skill = ({ skill, emoji }) => {
  return <span>{`${skill} ${emoji}`}</span>;
};

export default Skill;
