import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hudini from "./Components/Hudini/Hudini";
import Landing from "./Components/Landing/Landing";
import Home from "./Components/Home/Home";

function App() {
  const [state, setState] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      {
        item: "Surround Sound Pelican",
        price: 3099,
        discount: 0.05,
        hottest: true,
      },
    ],
    shouldDiscount: true,
    currentPage: "Landing",
  });

  return (
    //Ex1
    // <>
    //   <Hudini />
    // </>
    //Ex2,Ex3,Ex4
    <>
      <div className="container">
        <div
          className="button-page"
          onClick={() => {
            state.currentPage === "Landing"
              ? setState({ ...state, currentPage: "Home" })
              : setState({ ...state, currentPage: "Landing" });
          }}
        >
          Click
        </div>
        {state.currentPage === "Landing" ? (
          <Landing name={state.user} store={state.store} />
        ) : state.currentPage === "Home" ? (
          <Home store={state.store} shouldDiscount={state.shouldDiscount} />
        ) : null}
      </div>
    </>
  );
}

export default App;
