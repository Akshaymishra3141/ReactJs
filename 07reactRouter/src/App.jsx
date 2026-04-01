import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-gray-400 p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, doloribus
        accusantium maxime harum nam ab cupiditate nesciunt nobis modi itaque
        ratione a deserunt! Dolor in possimus beatae rerum alias quaerat.
      </h1>
    </>
  );
}

export default App;
