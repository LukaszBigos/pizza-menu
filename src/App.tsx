import React from "react";
import { Header } from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Menu from "./components/Menu/Menu.tsx";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
    // <div>
    //   <ProfileCard skills={["Mtb", "JS", "CSS", "HTML", "React"]} />
    // </div>
  );
}

export default App;
