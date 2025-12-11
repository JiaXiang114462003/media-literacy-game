import { useState, useEffect, useRef } from "react";
import { NEWS_DATABASE, CARD_STATUS } from "../data/newsDatabase";

// 模組級別的變數，用於在整個應用生命週期中保持索引
let globalNewsIndex = 0;

/**
 * 重置新聞索引（用於完全重新開始遊戲時）
 */
export function resetNewsIndex() {
  globalNewsIndex = 0;
}

/**
 * 新聞卡片遊戲邏輯 Hook
 * 處理新聞卡片的生成、位置和旋轉
 * @param {boolean} started - 是否開始遊戲
 * @param {Function} onStatsChange - 分數變化回調
 * @param {Object} onSoundEvent - 音效事件回調 { onVerifyResult: (isReal) => void }
 */
export function useCardsGame(
  started = true,
  onStatsChange = () => {},
  onSoundEvent = {}
) {
  const [newsCards, setNewsCards] = useState([]);
  const [verifyingCard, setVerifyingCard] = useState(false);
  const verifyingCardRef = useRef(false);
  const isGameEndedRef = useRef(false); // 追蹤遊戲是否已結束
  const cardTimersRef = useRef(new Map()); // 追蹤每個卡片的定時器

  // 同步 ref 和 state
  useEffect(() => {
    verifyingCardRef.current = verifyingCard;
  }, [verifyingCard]);

  // 元件卸載時標記遊戲已結束並清理所有定時器
  useEffect(() => {
    isGameEndedRef.current = false;
    const cardTimers = cardTimersRef.current;
    return () => {
      isGameEndedRef.current = true;
      // 清理所有卡片的定時器
      cardTimers.forEach((timerId) => {
        clearTimeout(timerId);
      });
      cardTimers.clear();
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
              // 如果是假新聞，查證完成後先保持正常顯示，3秒後開始淡出
              if (!news.isReal) {
                // 查證完成，但先保持正常顯示
                const updatedCard = {
                  ...card,
                  isVerified: true,
                  status: CARD_STATUS.default,
                };

                // 2.5秒後才設置為淡出狀態
                setTimeout(() => {
                  if (isGameEndedRef.current) return;

                  setNewsCards((prevCards) => {
                    return prevCards.map((c) => {
                      if (c.id === news.id) {
                        return {
                          ...c,
                          status: CARD_STATUS.fading,
                        };
                      }
                      return c;
                    });
                  });
                }, 2500);

                // 再等3秒後（總共5.5秒後）移除假新聞
                const fadeRemoveTimerId = setTimeout(() => {
                  if (isGameEndedRef.current) return;

                  setNewsCards((prevCards) => {
                    const cardStillExists = prevCards.some(
                      (c) => c.id === news.id
                    );
                    if (cardStillExists) {
                      return prevCards.filter((c) => c.id !== news.id);
                    }
                    return prevCards;
                  });

                  cardTimersRef.current.delete(news.id);
                }, 3000);

                // 將移除定時器 ID 存儲到 Map 中
                cardTimersRef.current.set(news.id, fadeRemoveTimerId);

                return updatedCard;
              } else {
                // 真新聞保持為 default 狀態
                return {
                  ...card,
                  isVerified: true,
                  status: CARD_STATUS.default,
                };
              }
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
      // 清理該卡片的定時器
      const timerId = cardTimersRef.current.get(news.id);
      if (timerId) {
        clearTimeout(timerId);
        cardTimersRef.current.delete(news.id);
      }
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

    // 清理該卡片的定時器
    const timerId = cardTimersRef.current.get(news.id);
    if (timerId) {
      clearTimeout(timerId);
      cardTimersRef.current.delete(news.id);
    }

    // 最後移除被分享的卡片
    setNewsCards((prev) => prev.filter((card) => card.id !== news.id));
  };

  // 生成新卡片的函式
  const spawnCard = () => {
    // 如果已經到達資料庫末尾，循環回到開頭
    if (globalNewsIndex >= NEWS_DATABASE.length) {
      globalNewsIndex = 0;
    }

    // 按照順序獲取新聞
    const currentNews = NEWS_DATABASE[globalNewsIndex];

    // 增加索引，為下一張卡片做準備
    globalNewsIndex++;

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
      ...currentNews,
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
