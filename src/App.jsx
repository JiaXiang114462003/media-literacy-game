import { useState } from 'react';
import GameScreen from './components/Screens/GameScreen/GameScreen';
import ResultScreen from './components/Screens/ResultScreen/ResultScreen';

function App() {
	// 初始值：trust 與 fans 都從 0 開始
	const initialTrust = 0;
	const [screen, setScreen] = useState('game');
	const [trust, setTrust] = useState(initialTrust);
	const [fans, setFans] = useState(0);
	const [round, setRound] = useState(1);
	return (
		<>
			{screen === 'game' && (
				<GameScreen
					round={round}
					initialTrust={trust}
					initialFans={fans}
					initialTime={30}
					onTimeUp={(finalTrust, finalFans) => {
						// 存下遊戲結束時的 trust 與 fans 值，確保 ResultScreen 顯示一致
						setTrust(typeof finalTrust === 'number' ? finalTrust : trust);
						setFans(typeof finalFans === 'number' ? finalFans : fans);
						setScreen('result');
					}}
				/>
			)}{' '}
			{screen === 'result' && (
				<ResultScreen
					round={round}
					trust={trust}
					fans={fans}
					onNext={() => {
						// 按下結果頁的按鈕：若目前回合小於 2，進入下一回合；否則重開回合 1
						if (round < 2) {
							setRound((r) => r + 1);
							setScreen('game');
						} else {
							// 重開遊戲
							setRound(1);
							setTrust(initialTrust);
							setFans(0);
							setScreen('game');
						}
					}}
				/>
			)}
		</>
	);
}

export default App;
