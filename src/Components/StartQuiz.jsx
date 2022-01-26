import React, { useState } from "react";
import "../index.css";
import "./StartQuiz.css";
import { ToggleButtonGroup } from "@mui/material";
import { ToggleButton } from "@mui/material";

function StartQuiz(props) {
  const [enteredNumber, setEnteredNumber] = useState("5");
  const [enteredContent, setEnteredContent] = useState("linux");
  const [enteredDifficulty, setEnteredDifficulty] = useState("Easy");

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
      <p className="message">
        Be smarter, quicker and brainier!
        <br />
        Put your quiz skills to the test and broaden your knowledge.
      </p>
      <div className="toggle">
        <div>
          <label className="label">Number of Questions:</label>
		  <br/>
          <ToggleButtonGroup
            color="secondary"
			value={enteredNumber}
            exclusive
            onChange={numberChangeHandler}
          >
            <ToggleButton value="5">5</ToggleButton>
            <ToggleButton value="10">10</ToggleButton>
            <ToggleButton value="15">15</ToggleButton>
          </ToggleButtonGroup>
        </div>
		<br/>
        <div>
          <label className="label">Subject Area:</label>
		  <br/>
		  <ToggleButtonGroup
            color="secondary"
			value={enteredContent}
            exclusive
            onChange={contentChangeHandler}
          >
            <ToggleButton value="linux">Linux</ToggleButton>
            <ToggleButton value="SQL">SQL</ToggleButton>
            <ToggleButton value="code">Code</ToggleButton>
          </ToggleButtonGroup>
        </div>
		<br/>
        <div>
          <label className="label">Difficulty:</label>
		  <br/>
		  <ToggleButtonGroup
            color="secondary"
			value={enteredDifficulty}
            exclusive
            onChange={difficultyChangeHandler}
          >
            <ToggleButton value="Easy">Easy</ToggleButton>
            <ToggleButton value="Medium">Medium</ToggleButton>
            <ToggleButton value="Hard">Hard</ToggleButton>
          </ToggleButtonGroup>
        </div>
		<br/>
      </div>
      <div className="btnDiv">
        <button className="btn" type="submit">Start Quiz</button>
      </div>
    </form>
  );
}

export default StartQuiz;
