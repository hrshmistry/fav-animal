import React from "react";
import "./styles.css";

export default function App() {
  function LikeClickHandler() {
    console.log("clicked.");
  }

  return (
    <div className="App">
      <h1>inside out</h1>
      <button onClick={LikeClickHandler}>Like me!</button>
    </div>
  );
}
