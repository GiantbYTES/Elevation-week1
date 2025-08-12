import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Time from "./Components/Time/Time";
import { Posts } from "./Components/Posts/Posts";

function App() {
  return (
    <>
      <Time />
      <h2>Top Posts</h2>
      <Posts />
    </>
  );
}

export default App;
