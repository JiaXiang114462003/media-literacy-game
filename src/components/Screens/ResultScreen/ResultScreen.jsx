import React, { useEffect } from 'react';
import '../../Layout/Layout.css';
import './ResultScreen.css';
import Layout from '../../Layout/Layout';

export default function ResultScreen({
	round = 1,
	trust = 0,
	fans = 0,
	onNext = () => {},
	bgm = {},
}) {
	// 結果畫面播放 BGM
	useEffect(() => {
		if (bgm.result) {
			bgm.result();
		}
		return () => {
			if (bgm.stop) {
				bgm.stop();
			}
		};
	}, []);

	// 計算動態漸層背景（根據 trust 和 fans）
	// trust < 0 時：整條 bar 用粉紅色
	// trust >= 0 時：分界點 = trust / (trust + fans) 的百分比；都為 0 時預設各半（50%）
	let barBackground;
	if (trust < 0) {
		// trust 為負，整條 bar 用粉紅色
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

	return (
		<div
			className="result-screen-root"
			style={{ minHeight: '100vh', background: '#0b1220' }}
		>
			<Layout round={round} trust={trust} fans={fans} barStyle={barStyle}>
				<div className="result-screen-content">
					<div className="result-panel">
						<h2 className="result-title">ROUND {round} STATUS</h2>
						{/* 根據回合顯示：Round1 顯示階段完成文字；Round2+ 顯示稱號 */}
						{(function renderSubtitle() {
							if (round === 1) {
								return <p className="result-sub">第一階段已完成</p>;
							}
							const diff = fans - trust; // 正值代表 trust 較高
							let title = '雜訊煉金師';
							if (diff <= 200) title = '人間清醒';
							else if (diff >= 400) title = '演算法之子';
							return <p className="result-sub">恭喜您獲得稱號：{title}</p>;
						})()}{' '}
						<div className="result-cards">
							<div className="result-card left">
								<div className="card-label left">公眾信任度</div>
								<div className="card-value">{trust}</div>
							</div>
							<div className="result-card right">
								<div className="card-label right">平台粉絲數</div>
								<div className="card-value">{fans}</div>
							</div>
						</div>{' '}
						<div className="result-actions">
							<button className="enter-btn" onClick={onNext}>
								{round === 1 ? '進入第二回合 →' : '重新開始'}
							</button>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}
