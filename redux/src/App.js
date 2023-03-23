import { useState } from "react";
import "./App.css";
import { Buttons } from "./Buttons";
import { Display } from "./Display";
import { Subtract } from "./Subtract";

function App() {
  const [counter, setCounter] = useState(22);
  const onClick = (operator) => {
    operator==="+"?setCounter(counter+1):setCounter(counter-1)
  }

  return (
    <div className="App">
      <Display counter={counter}></Display>
      <Buttons setCounter={onClick}></Buttons>
    </div>
  );
}

export default App;
