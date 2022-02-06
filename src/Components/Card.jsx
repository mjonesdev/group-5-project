import React, { useState, useEffect } from "react";
import baseURL from "./Request";
import axios from "axios";
import "../index.css";

export default function Card(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  let URL = `${baseURL}&category=${props.quizOptions.content}&difficulty=${props.quizOptions.difficulty}&limit=${props.quizOptions.number}`;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${URL}`);
      setQuestions(request.data);
      setIsLoading(false);
      return request;
    }
    fetchData();
  }, [URL]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetHandler = (event) => {
    event.preventDefault();
    const quizData = {
      number: 5,
      content: "linux",
      difficulty: "Easy",
      gameState: "start",
    };
    props.restartFunction(quizData);
  };

  const questionContent = isLoading ? (
    <div>...Loading</div>
  ) : (
    <>
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestion].question}
        </div>
      </div>
      <div className="answer-section">
        {Object.keys(questions[currentQuestion].answers).map((answerOption) =>
          questions[currentQuestion].answers[answerOption] === null ? (
            <div></div>
          ) : (
            <button onClick={() => handleAnswerOptionClick(answerOption)}>
              {questions[currentQuestion].answers[answerOption]}
            </button>
          )
        )}
      </div>
    </>
  );

  const restartBtn = (
    <div className="btnDiv">
      <button
        className="btn"
        type="button"
        value={"start"}
        onClick={resetHandler}
      >
        Restart
      </button>
    </div>
  );

  return (
    <div>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <div>{questionContent}</div>
        )}
      </div>
      {showScore ? restartBtn : <div></div>}
    </div>
  );
}
