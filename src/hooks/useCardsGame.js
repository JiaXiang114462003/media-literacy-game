import { useState, useEffect, useRef } from 'react';
import { NEWS_DATABASE, CARD_STATUS } from '../data/newsDatabase';

/**
 * 新聞卡片遊戲邏輯 Hook
 * 處理新聞卡片的生成、位置和旋轉
 * @param {boolean} started - 是否開始遊戲
 * @param {Function} onStatsChange - 分數變化回調
 * @param {Object} onSoundEvent - 音效事件回調 { onVerifyResult: (isReal) => void }
 */
export function useCardsGame(started = true, onStatsChange = () => {}, onSoundEvent = {}) {
	const [newsCards, setNewsCards] = useState([]);
	const [verifyingCard, setVerifyingCard] = useState(false);
	const verifyingCardRef = useRef(false);
	const isGameEndedRef = useRef(false); // 追蹤遊戲是否已結束

	// 同步 ref 和 state
	useEffect(() => {
		verifyingCardRef.current = verifyingCard;
	}, [verifyingCard]);

	// 元件卸載時標記遊戲已結束
	useEffect(() => {
		isGameEndedRef.current = false;
		return () => {
			isGameEndedRef.current = true;
		};
	}, []);

	const handleVerifyCard = (news) => {
		// 只要使用者點擊查證，立即增加社會信任度 +20
		if (!news.isVerified) {
			onStatsChange({ trustDelta: 20, fansDelta: 0 });

			//將欲查證的卡片狀態設為 verifying，其他卡片狀態設為 disabled
			setVerifyingCard(true);
			setNewsCards((prev) => {
				return prev.map((card) => {
					if (card.id === news.id) {
						return { ...card, status: CARD_STATUS.verifying };
					}
					return { ...card, status: CARD_STATUS.disabled };
				});
			});

			//5秒後，將欲查證的卡片狀態設為 true 或 false，其他卡片狀態設為 default
			setTimeout(() => {
				// 如果遊戲已結束，不執行任何操作
				if (isGameEndedRef.current) return;

				setVerifyingCard(false);
				
				// 播放查證結果音效（只在遊戲進行中播放）
				if (onSoundEvent.onVerifyResult) {
					onSoundEvent.onVerifyResult(news.isReal);
				}

				setNewsCards((prev) => {
					return prev.map((card) => {
						if (card.id === news.id) {
							return {
								...card,
								isVerified: true,
								status: CARD_STATUS.default,
							};
						}
						return {
							...card,
							status: CARD_STATUS.default,
						};
					});
				});
			}, 5000);
		}
		if (news.isVerified && news.isReal) {
			setNewsCards((prev) => prev.filter((card) => card.id !== news.id));
		}
	};

	const handleShareCard = (news, titleIndex = 0) => {
		// 計分規則（依 user 指定）
		// titleIndex: 0 = 超級聳動, 1 = 一般聳動, 2 = 平鋪直敘
		let fansDelta = 0;
		let trustDelta = 0;
		const isReal = !!news.isReal;
		switch (titleIndex) {
			case 0: // 超級聳動
				if (!isReal) {
					fansDelta = 100;
					trustDelta = -60;
				} else {
					fansDelta = 80;
					trustDelta = -20;
				}
				break;
			case 1: // 一般聳動
				if (!isReal) {
					fansDelta = 80;
					trustDelta = -40;
				} else {
					fansDelta = 60;
					trustDelta = 0;
				}
				break;
			case 2: // 平鋪直敘
				if (!isReal) {
					fansDelta = 60;
					trustDelta = -20;
				} else {
					fansDelta = 40;
					trustDelta = 20;
				}
				break;
			default:
				// 若沒有指定 index，當作一般聳動
				if (!isReal) {
					fansDelta = 80;
					trustDelta = -40;
				} else {
					fansDelta = 60;
					trustDelta = 0;
				}
		}

		// 回報分數/變動給呼叫者 (GameScreen)
		onStatsChange({ trustDelta, fansDelta });

		// 最後移除被分享的卡片
		setNewsCards((prev) => prev.filter((card) => card.id !== news.id));
	};

	// 生成新卡片的函式
	const spawnCard = () => {
		const randomNews =
			NEWS_DATABASE[Math.floor(Math.random() * NEWS_DATABASE.length)];

		// 安全區域：topbar 高度約 80px，卡片高度 212px，倒計時器區域在右下
		const topbarHeight = 80;
		const cardHeight = 212;
		const cardWidth = 442;
		const countdownSize = 120;
		const padding = 20;

		const maxTop = Math.max(
			topbarHeight,
			window.innerHeight - cardHeight - countdownSize - padding
		);
		const minTop = topbarHeight + padding;
		const maxLeft = Math.max(
			0,
			window.innerWidth - cardWidth - countdownSize - padding
		);
		const minLeft = padding;

		const newCard = {
			...randomNews,
			status: verifyingCardRef.current
				? CARD_STATUS.disabled
				: CARD_STATUS.default,
			id: Date.now() + Math.random(),
			top: Math.random() * (maxTop - minTop) + minTop,
			left: Math.random() * (maxLeft - minLeft) + minLeft,
			rotation: Math.random() * 30 - 15,
			createdAt: new Date(),
		};
		setNewsCards((prev) => [...prev, newCard]);
	};

	useEffect(() => {
		if (!started) return;

		// 第一張卡片 0.5 秒後出現
		const firstCardTimer = setTimeout(() => {
			spawnCard();
		}, 500);

		// 之後每 3 秒出現一張卡片
		const timer = setInterval(() => {
			spawnCard();
		}, 3000);

		return () => {
			clearTimeout(firstCardTimer);
			clearInterval(timer);
		};
	}, [started]);

	return {
		newsCards,
		handleVerifyCard,
		handleShareCard,
	};
}
