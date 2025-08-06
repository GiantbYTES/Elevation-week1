import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Exercise1 from "./Components/Exercise1/Exercise1";
import Exercise2 from "./Components/Exercise2/Exercise2";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Exercise1 /> */}
      <Exercise2 />
    </>
  );
}

export default App;
