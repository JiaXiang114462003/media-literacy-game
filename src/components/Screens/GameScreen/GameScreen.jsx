import React, { useEffect, useState } from 'react';
import '../../Layout/Layout.css';
import './GameScreen.css';
import Layout from '../../Layout/Layout';
import NewsCard from '../../Game/NewsCard';
import { useCardsGame } from '../../../hooks/useCardsGame';

/**
 * GameScreen
 * - 左上：icon 與 `Media Title`
 * - 中上：ROUND 標題
 * - 右上：動態漸層 Bar（左藍右紅），上方顯示兩個百分比標籤
 * - 右下：圓形倒數計時器（預設 60s）
 */
export default function GameScreen({
	round = 1,
	initialTrust = 0, // 公眾信任度
	initialFans = 50, // 粉絲數
	initialTime = 60, // 秒
	onTimeUp = () => {},
}) {
	const [trust, setTrust] = useState(initialTrust);
	const [seconds, setSeconds] = useState(initialTime);

	// 初始粉絲數由 prop 決定（多回合時會帶入上一回合的結束值）
	const [fans, setFans] = useState(() => initialFans);

	// 傳入 onStatsChange callback 以便 hook 在分享/查證時回報變化
	// 注意：不再把 trust/fans 限制在 0-100，top 的顯示會直接反映原始數值；
	// 下方 bar 的視覺仍使用百分比（在本檔中會對 trust 取 0-100 範圍）
	const { newsCards, handleVerifyCard, handleShareCard } = useCardsGame(
		true,
		({ trustDelta = 0, fansDelta = 0 } = {}) => {
			if (trustDelta) {
				setTrust((t) => t + trustDelta);
			}
			if (fansDelta) {
				setFans((f) => f + fansDelta);
			}
		}
	);

	// 當前需求：紅色區域等於 100 - trust
	// 顯示為百分比用於 bar（clamp 到 0-100），但傳給 Layout 的 fans 為原始累積數值
	const fansPercent = Math.max(0, Math.min(100, Math.round(fans)));

	useEffect(() => {
		// 簡易倒數計時器
		if (seconds <= 0) return;
		const t = setInterval(() => setSeconds((s) => s - 1), 1000);
		return () => clearInterval(t);
	}, [seconds]);

	// 當倒數到 0 時，通知父層切換畫面並傳遞當前 trust 與 fans 值
	useEffect(() => {
		if (seconds === 0) {
			onTimeUp(trust, fans);
		}
	}, [seconds, trust, fans, onTimeUp]);

	// 計算動態漸層背景（根據 trust 和 fans）
	// trust < 0 時：整條 bar 用粉紅四段漸層
	// trust >= 0 時：分界點 = trust / (trust + fans) 的百分比；都為 0 時預設各半（50%）
	let barBackground;
	if (trust < 0) {
		// trust 為負，整條 bar 用粉紅四段漸層（全粉紅）
		barBackground = `linear-gradient(90deg, #FF467B 0%, #FFB5CA 50%, #FFB5CA 50%, #FF467B 100%)`;
	} else {
		// trust >= 0：計算分界點
		const total = trust + fans;
		let trustPercent;
		if (total === 0) {
			// 都為 0 時，預設各半
			trustPercent = 50;
		} else {
			trustPercent = Math.round((trust / total) * 100);
		}
		// 左邊藍色（0% 到 trustPercent%），右邊粉紅色（trustPercent% 到 100%）
		barBackground = `linear-gradient(90deg, #52A6FF 0%, #9FCFFF ${trustPercent}%, #FFB5CA ${trustPercent}%, #FF467B 100%)`;
	}
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
				{/* 新聞卡片容器：使用 hook 產生的 newsCards 動態渲染 */}
				<div style={{ position: 'relative', width: '100%', height: '100%' }}>
					{newsCards.map((news) => (
						<NewsCard
							key={news.id}
							news={news}
							top={news.top}
							left={news.left}
							rotation={news.rotation}
							handleVerifyCard={handleVerifyCard}
							handleShareCard={handleShareCard}
						/>
					))}
				</div>
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
