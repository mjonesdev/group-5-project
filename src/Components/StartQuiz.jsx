import React, { useState } from "react";
import "../index.css";
import "./StartQuiz.css";

function StartQuiz(props) {
  const [enteredNumber, setEnteredNumber] = useState("5");
  const [enteredContent, setEnteredContent] = useState("linux");
  const [enteredDifficulty, setEnteredDifficulty] = useState("easy");

  const numberChangeHandler = (event) => {
    setEnteredNumber(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setEnteredContent(event.target.value);
  };

  const difficultyChangeHandler = (event) => {
    setEnteredDifficulty(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const quizData = {
      number: enteredNumber,
      content: enteredContent,
      difficulty: enteredDifficulty,
      gameState: "card",
    };

    props.onSaveQuizOptions(quizData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Number of Questions:</label>
          <select
            value={enteredNumber}
            name="content"
            id="content"
            onChange={numberChangeHandler}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
        <div>
          <label>Subject Area</label>
          <select
            value={enteredContent}
            name="content"
            id="content"
            onChange={contentChangeHandler}
          >
            <option value="linux">Linux</option>
            <option value="sql">SQL</option>
            <option value="code">Code</option>
          </select>
        </div>
        <div>
          <label>Difficulty</label>
          <select
            value={enteredDifficulty}
            name="content"
            id="content"
            onChange={difficultyChangeHandler}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>
      <div>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );

}

export default StartQuiz;
