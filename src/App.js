import React, { useState } from "react";
import Card from "./Components/Card";
import StartQuiz from "./Components/StartQuiz";
import "./index.css";

export default function App() {
  const [quizOptions, setQuizOptions] = useState({
    gameState: "start",
    difficulty: "easy",
    category: "linux",
    number: 5,
  });

  const saveOptionsDataHandler = (enteredOptions) => {
    setQuizOptions({
      ...enteredOptions,
    });
  };

  const saveGameStateRestart = (receivedData) => {
    setQuizOptions({
      ...receivedData,
    });
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {quizOptions.gameState === "start" ? (
        <StartQuiz onSaveQuizOptions={saveOptionsDataHandler} />
      ) : (
        <Card
          quizOptions={quizOptions}
          restartFunction={saveGameStateRestart}
        />
      )}
      <div className="slider-thumb"></div>
      <div className="slider-thumb1"></div>
      <div className="slider-thumb2"></div>
    </div>
  );
}
