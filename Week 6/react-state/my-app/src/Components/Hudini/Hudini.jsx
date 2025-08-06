import { useState } from "react";
import "./Hudini.css";

export function Hudini() {
  const [show, setShow] = useState();

  return (
    <div className="Hudini">
      <div onClick={() => setShow(!show)}>Click</div>
      {show ? <div>Now you see me</div> : <div>Now you don't</div>}
    </div>
  );
}

export default Hudini;
