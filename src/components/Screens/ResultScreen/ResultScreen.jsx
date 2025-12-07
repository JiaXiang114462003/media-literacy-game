import React from 'react';
import '../../Layout/Layout.css';
import './ResultScreen.css';
import Layout from '../../Layout/Layout';

export default function ResultScreen({
	round = 1,
	trust = 0,
	onNext = () => {},
}) {
	const fans = Math.max(0, 100 - trust);

	// 計算動態漸層背景（根據 trust）
	// 左側（trust）從 #52A6FF 漸變到 #9FCFFF，右側（fans）從 #FF5A89 漸變到 #FFB5CA
	// 在 trustPercent 位置做明顯交界：左邊為 #9FCFFF，右邊為 #FFB5CA
	const trustPercent = Math.max(0, Math.min(100, trust));
	const barBackground = `linear-gradient(90deg, #52A6FF 0%, #9FCFFF ${trustPercent}%, #FFB5CA ${trustPercent}%, #FF5A89 100%)`;
	const barStyle = {
		background: barBackground,
		transition: 'background 400ms ease',
	};

	return (
		<div
			className="result-screen-root"
			style={{ minHeight: '100vh', background: '#0b1220' }}
		>
			<Layout round={round} trust={trust} fans={fans} barStyle={barStyle}>
				<div className="result-panel">
					<h2 className="result-title">ROUND {round} STATUS</h2>

					{/* 根據回合顯示：Round1 顯示階段完成文字；Round2+ 顯示稱號 */}
					{(function renderSubtitle() {
						if (round === 1) {
							return <p className="result-sub">第一階段已完成</p>;
						}
						const diff = trust - fans; // 正值代表 trust 較高
						let title = '雜訊煉金師';
						if (diff >= 20) title = '人間清醒';
						else if (diff <= -20) title = '演算法之子';
						return <p className="result-sub">恭喜您獲得稱號：{title}</p>;
					})()}

					<div className="result-cards">
						<div className="result-card left">
							<div className="card-label">AUDIENCE IMPACT</div>
							<div className="card-value">{trust}%</div>
						</div>
						<div className="result-card right">
							<div className="card-label">CREDIBILITY SCORE</div>
							<div className="card-value">{fans}%</div>
						</div>
					</div>

					<div className="result-actions">
						<button className="enter-btn" onClick={onNext}>
							{round === 1 ? '進入第二回合 →' : '重新開始'}
						</button>
					</div>
				</div>
			</Layout>
		</div>
	);
}
