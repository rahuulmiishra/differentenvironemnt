import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MEDIUM_LINK } from "./envrionment";

function App() {
  return (
    <div className="App">
      <h1>
        Follow 👉🏻 <a href={MEDIUM_LINK}>@rahuulmiishra 🏋🏻‍♂️</a>
      </h1>
    </div>
  );
}

export default App;
