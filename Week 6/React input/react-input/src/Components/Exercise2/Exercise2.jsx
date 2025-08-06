import "./Exercise2.css";
import { useState } from "react";

const Exercise2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  function selected(selectedFruit) {
    console.log(name + " selected " + selectedFruit);
  }

  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <select
        id="select-input"
        onChange={(e) => {
          const selectedFruit = e.target.value;
          setFruit(selectedFruit);
          selected(selectedFruit);
        }}
        value={fruit}
      >
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="cherry">Cherry</option>
        <option value="date">Date</option>
      </select>
    </div>
  );
};
export default Exercise2;
