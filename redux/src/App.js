import { useState } from "react";
import "./App.css";
import { Buttons } from "./Buttons";
import { Display } from "./Display";
import { Subtract } from "./Subtract";

function App() {
  return (
    <div className="App">
      <Display></Display>
      <Buttons></Buttons>
    </div>
  );
}

export default App;
