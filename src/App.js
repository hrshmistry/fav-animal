import React from "react";
import "./styles.css";

var welcomeMsg = "Welcome";
var color = "blue";
// var username = prompt("Give me your name!");
var username = "Harsh";

export default function App() {
  return (
    <div className="App">
      <h1>
        {welcomeMsg} <span style={{ color: color }}> {username} </span>
      </h1>
    </div>
  );
}
