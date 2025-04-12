import React from "react";
import "./ProfileCard.css";
// import Funghi from "./funghi.jpg";
import Skill from "../Skill/Skill.tsx";
const ProfileCard = ({ skills }) => {
  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 765).toString(16)}`;
  };

  const generateRandomEmoji = () => {
    const emojis = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇"];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };
  return (
    <div className="profileCardContainer">
      <img className="profilePhoto" src={Funghi} alt="Profile" />
      <section className="profileInfo">
        <h2 className="profileName">Lukasz Bigos</h2>
        <p>
          Mountain biker and Front End Developer. Outside working hours father
          of twins :)
        </p>
        <div className="skillsContainer">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skillWrapper"
              style={{ backgroundColor: getRandomColor() }}
            >
              <Skill skill={skill} emoji={generateRandomEmoji()} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfileCard;
