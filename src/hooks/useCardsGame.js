import { useState, useEffect, useRef } from 'react';
import { NEWS_DATABASE, CARD_STATUS } from '../data/newsDatabase';

/**
 * 新聞卡片遊戲邏輯 Hook
 * 處理新聞卡片的生成、位置和旋轉
 */
export function useCardsGame(started = true) {
	const [newsCards, setNewsCards] = useState([]);
	const [verifyingCard, setVerifyingCard] = useState(false);
	const verifyingCardRef = useRef(false);

	// 同步 ref 和 state
	useEffect(() => {
		verifyingCardRef.current = verifyingCard;
	}, [verifyingCard]);

	const handleVerifyCard = (news) => {
		//將欲查證的卡片狀態設為 verifying，其他卡片狀態設為 disabled

		if (!news.isVerified) {
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
				setVerifyingCard(false);
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

	const handleShareCard = (news) => {
		setNewsCards((prev) => prev.filter((card) => card.id !== news.id));
	};
	useEffect(() => {
		if (!started) return;
		const timer = setInterval(() => {
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
		}, 3000);
		return () => clearInterval(timer);
	}, [started]);

	return {
		newsCards,
		handleVerifyCard,
		handleShareCard,
	};
}
