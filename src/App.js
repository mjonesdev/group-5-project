// Using a react hook 'useContext'
import React, { useState, useContext } from 'react';
import Card from './Components/Card';
import StartQuiz from './Components/StartQuiz';
import './index.css';
import { QuizContext } from './Helpers/Contexts';

export default function App() {
	const [gameState, setGameState] = useState("start");
	const [quizOptions, setQuizOptions] = useState({
		gameState: "start",
		difficulty: "easy",
		category: "linux",
		number: 5,
	  })

	const saveOptionsDataHandler = (enteredOptions) => {
		setQuizOptions({
			...enteredOptions
		})
	}

	const saveGameStateRestart = (receivedData) => {
		setGameState({
			...enteredOptions
		})
	}

	return (

		<div className="App">
		<h1>Quiz App</h1>
        <QuizContext.Provider value={{ gameState, setGameState }}>
        {quizOptions.gameState === "start" && <StartQuiz onSaveQuizOptions={saveOptionsDataHandler}/>}
		{quizOptions.gameState === "card" && <Card quizOptions={quizOptions}/>}
        </QuizContext.Provider>
		<div className="slider-thumb"></div>
		<div className="slider-thumb1"></div>
		<div className="slider-thumb2"></div>
		</div>
	);
}