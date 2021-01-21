import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function LikeClickHandler() {
    var newLikeCounter = likeCounter + 1; // processing
    // likeCounter in the view
    setLikeCounter(newLikeCounter); // processing/output
  }

  return (
    <div className="App">
      <h1>inside out</h1>
      <button onClick={LikeClickHandler}>Like me! </button> {likeCounter}
    </div>
  );
}
