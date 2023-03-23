import { useState } from "react";
import "./App.css";
import { Buttons } from "./Buttons";
import { Display } from "./Display";
import { Subtract } from "./Subtract";

function App() {
  const [counter, setCounter] = useState(22);

  return (
    <div className="App">
      <Display counter={counter}></Display>
      <Buttons></Buttons>
    </div>
  );
}

export default App;
