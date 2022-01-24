import React, {useContext} from 'react';
import {QuizContext} from "../Helpers/Contexts";
import "../index.css";

function StartQuiz() {
	const { gameState, setGameState } = useContext(QuizContext);

	return (
	<div className="Start">
    <button onClick={() => {setGameState("card")}}>Start Quiz</button>
	</div>
	);
}

export default StartQuiz;