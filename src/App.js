// Using a react hook 'useContext'
import React, { useState, useContext } from 'react';
import Card from './Components/Card';
import StartQuiz from './Components/StartQuiz';
import './index.css';
import { QuizContext } from './Helpers/Contexts';

export default function App() {
	const [gameState, setGameState] = useState("start");

	return (

		<div className="App">
		<h1>Quiz App</h1>
        <QuizContext.Provider value={{ gameState, setGameState }}>
        {gameState === "start" && <StartQuiz />}
		{gameState === "card" && <Card />}
        </QuizContext.Provider>
		<div class="slider-thumb"></div>
		<div class="slider-thumb1"></div>
		<div class="slider-thumb2"></div>
		</div>
	);
}