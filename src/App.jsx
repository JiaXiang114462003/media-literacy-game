import { useState } from 'react';
import GameScreen from './components/Screens/GameScreen/GameScreen';
import ResultScreen from './components/Screens/ResultScreen/ResultScreen';

function App() {
	// 初始 trust 值（可改成 props 或常數來源）
	const initialTrust = 50;
	const [screen, setScreen] = useState('game');
	const [trust, setTrust] = useState(initialTrust);
	const [round, setRound] = useState(1);
	return (
		<>
			{screen === 'game' && (
				<GameScreen
					round={round}
					initialTrust={trust}
					initialTime={10}
					onTimeUp={(finalTrust) => {
						// 存下遊戲結束時的 trust 值，確保 ResultScreen 顯示一致
						setTrust(typeof finalTrust === 'number' ? finalTrust : trust);
						setScreen('result');
					}}
				/>
			)}

			{screen === 'result' && (
				<ResultScreen
					round={round}
					trust={trust}
					onNext={() => {
						// 按下結果頁的按鈕：若目前回合小於 2，進入下一回合；否則重開回合 1
						if (round < 2) {
							setRound((r) => r + 1);
							setScreen('game');
						} else {
							// 重開遊戲
							setRound(1);
							setTrust(initialTrust);
							setScreen('game');
						}
					}}
				/>
			)}
		</>
	);
}

export default App;
