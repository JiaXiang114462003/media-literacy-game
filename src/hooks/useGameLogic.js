import { useState, useEffect } from 'react';

/**
 * 遊戲邏輯自定義 Hook
 * 抽離計時器、分數計算等邏輯
 */
export function useGameLogic(initialScore = 0, timeLimit = 60) {
	const [score, setScore] = useState(initialScore);
	const [timeRemaining, setTimeRemaining] = useState(timeLimit);
	const [gameActive, setGameActive] = useState(false);

	// 計時器邏輯
	useEffect(() => {
		if (!gameActive || timeRemaining <= 0) return;

		const timer = setInterval(() => {
			setTimeRemaining((prev) => {
				if (prev <= 1) {
					setGameActive(false);
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [gameActive, timeRemaining]);

	const startGame = () => {
		setScore(initialScore);
		setTimeRemaining(timeLimit);
		setGameActive(true);
	};

	const endGame = () => {
		setGameActive(false);
	};

	const addScore = (points) => {
		setScore((prev) => prev + points);
	};

	return {
		score,
		timeRemaining,
		gameActive,
		startGame,
		endGame,
		addScore,
	};
}
