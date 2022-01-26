import React, {useContext} from 'react';
import {QuizContext} from "../Helpers/Contexts";
import "../index.css";

function StartQuiz() {
	const { gameState, setGameState } = useContext(QuizContext);

	return (
	<div className="Start">
	<p>Be smarter, quicker and brainier!<br/>Put your quiz skills to the test and broaden your knowledge.</p>
    <button onClick={() => {setGameState("card")}}>Start Quiz</button>
	</div>
	);
}

export default StartQuiz;