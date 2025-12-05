import { useState, useEffect, useRef } from "react";
import { NEWS_DATABASE, CARD_STATUS } from "../data/newsDatabase";

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

      //3秒後，將欲查證的卡片狀態設為 true 或 false，其他卡片狀態設為 default
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
      }, 3000);
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
      const newCard = {
        ...randomNews,
        status: verifyingCardRef.current
          ? CARD_STATUS.disabled
          : CARD_STATUS.default,
        id: Date.now() + Math.random(), // 唯一 ID
        top: Math.random() * (window.innerHeight - 212),
        left: Math.random() * (window.innerWidth - 442),
        rotation: Math.random() * 30 - 15, // -15 到 15 度
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
