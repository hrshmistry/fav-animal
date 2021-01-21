import React from "react";
import "./styles.css";

var color = "blue";
var username = prompt("Give me your username!");

export default function App() {
  // function LikeClickHandler() {
  //   console.log("clicked.");
  // }

  return (
    <div className="App">
      <h1>
        inside out <span style={{ color: color }}> {username} </span>
      </h1>
      {/* <button onClick={LikeClickHandler}>Like me!</button> */}
    </div>
  );
}
