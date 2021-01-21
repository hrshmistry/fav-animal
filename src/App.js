import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [userInput, setUserInput] = useState("");
  function onChangeHandler(event) {
    console.log(event.target.value);
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      <h1>inside out</h1>
      <input onChange={onChangeHandler}></input>
      <div>Welcome {userInput}</div>
    </div>
  );
}

/*
React is "VISER"
View -> Interect -> State in Event handler -> React
*/
