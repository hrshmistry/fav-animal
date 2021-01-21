import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🙈": "See-No-Evil Monkey",
  "🐶": "Dog Face",
  "🦄": "Unicorn",
  "👻": "boo",
  "🦊": "Fox",
  "🐼": "Panda",
  "🦥": "Sloth"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our DB";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Did you find your fav one?</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3 style={{ color: "gray" }}>emojis we know</h3>{" "}
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
