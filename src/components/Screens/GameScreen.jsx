import React from "react";
import NewsCard from "../Game/NewsCard";
import { useCardsGame } from "../../hooks/useCardsGame";

/**
 * 遊玩畫面元件
 */
export default function GameScreen() {
  const { newsCards, handleVerifyCard, handleShareCard } = useCardsGame();

  return (
    <div
      className="game-screen"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
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
  );
}
