import React, { useEffect, useState } from 'react';
import '../../Layout/Layout.css';
import './GameScreen.css';
import Layout from '../../Layout/Layout';

/**
 * GameScreen
 * - 左上：icon 與 `Media Title`
 * - 中上：ROUND 標題
 * - 右上：動態漸層 Bar（左藍右紅），上方顯示兩個百分比標籤
 * - 右下：圓形倒數計時器（預設 60s）
 */
export default function GameScreen({
	round = 1,
	initialTrust = 0, // 公眾信任度 (0-100)
	initialTime = 60, // 秒
	onTimeUp = () => {},
}) {
	const [trust, setTrust] = useState(initialTrust);
	const [seconds, setSeconds] = useState(initialTime);

	// 當前需求：紅色區域等於 100 - trust
	const fans = Math.max(0, Math.min(100, 100 - trust));

	useEffect(() => {
		// 簡易倒數計時器
		if (seconds <= 0) return;
		const t = setInterval(() => setSeconds((s) => s - 1), 1000);
		return () => clearInterval(t);
	}, [seconds]);

	// 當倒數到 0 時，通知父層切換畫面並傳遞當前 trust 值
	useEffect(() => {
		if (seconds === 0) {
			onTimeUp(trust);
		}
	}, [seconds, trust, onTimeUp]);

	// 計算動態漸層背景（根據 trust）
	// 左側（trust）從 #52A6FF 漸變到 #9FCFFF，右側（fans）從 #FF5A89 漸變到 #FFB5CA
	// 在 trustPercent 位置做明顯交界：左邊為 #9FCFFF，右邊為 #FFB5CA
	const trustPercent = Math.max(0, Math.min(100, trust));
	const barBackground = `linear-gradient(90deg, #52A6FF 0%, #9FCFFF ${trustPercent}%, #FFB5CA ${trustPercent}%, #FF5A89 100%)`;
	const barStyle = {
		background: barBackground,
		transition: 'background 400ms ease',
	};

	// 格式化時間為 MM:SS
	const formatTime = (s) => {
		const m = Math.floor(s / 60)
			.toString()
			.padStart(2, '0');
		const ss = Math.floor(s % 60)
			.toString()
			.padStart(2, '0');
		return `${m}:${ss}`;
	};

	// 允許外部或測試時動態調整（未公開 UI）
	// 實際遊戲中會由事件或邏輯控制 trust/fans

	return (
		<div className="game-screen">
			<Layout round={round} trust={trust} fans={fans} barStyle={barStyle}>
				{/* 這裡插入 NewsCard（其他人會實作），暫留 placeholder */}
				<div className="news-placeholder" />
			</Layout>

			{/* 右下倒數圓形 */}
			<div className="countdown" aria-live="polite">
				<div className="time">{formatTime(seconds)}</div>
			</div>
		</div>
	);
}

const styles = {
	screen: {
		minHeight: '100vh',
		background: '#0b1220',
		position: 'relative',
		color: '#fff',
		fontFamily: 'Inter, Arial, sans-serif',
	},
	topbar: {
		position: 'relative',
		zIndex: 10,
	},
};
