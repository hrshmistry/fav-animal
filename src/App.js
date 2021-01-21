import React from "react";
import "./styles.css";

var likeCounter = 0;

export default function App() {
  function LikeClickHandler() {
    likeCounter = likeCounter + 1;
    console.log("clicked", likeCounter);
  }

  return (
    <div className="App">
      <h1>inside out {likeCounter}</h1>
      <button onClick={LikeClickHandler}>Like me!</button>
    </div>
  );
}
