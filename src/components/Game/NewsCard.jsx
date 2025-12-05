import React, { useState } from "react";
import user from "../../assets/user.png";
import verify from "../../assets/verify.png";
import close from "../../assets/close.png";
import loading from "../../assets/loading.png";
import share from "../../assets/share.png";
import "../../styles/card.css";
import { CARD_STATUS } from "../../data/newsDatabase";
/**
 * 新聞卡片元件
 * 用於顯示漂浮的新聞卡片 (Feed item)
 * @param {Object} news - 新聞資料物件
 * @param {number} top - 距離頂部的距離（px）
 * @param {number} left - 距離左側的距離（px）
 * @param {number} rotation - 旋轉角度（度，-15 到 15）
 */
export default function NewsCard({
  news,
  top = 0,
  left = 0,
  rotation = 0,
  handleVerifyCard,
  handleShareCard,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="news-card"
      style={{
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
        width: "442px",
        height: "212px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "28px",
        borderRadius: "10px",
        border:
          news.isVerified && news.isReal
            ? "4px solid #23C25F"
            : news.isVerified && !news.isReal
            ? "4px solid #D83232"
            : "4px solid transparent",
        boxShadow:
          news.status === CARD_STATUS.verifying
            ? "0px 0px 20px 0px #FFD865"
            : "none",
        filter: news.status === CARD_STATUS.disabled ? "blur(1.5px)" : "none",
        pointerEvents: news.status === CARD_STATUS.disabled ? "none" : "auto",
        cursor: news.status === CARD_STATUS.disabled ? "default" : "pointer",
        transform: `rotate(${rotation}deg)`,
        zIndex: isHovered ? 1000 : 1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <div style={{ width: "33.33px", height: "33.33px" }}>
            <img src={user} alt="user" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "150%",
              }}
            >
              {news.title}
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "150%",
                color: "#B0B0B0",
              }}
            >
              {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>

        <div>
          <div
            className="status-badge"
            style={{
              display: news.isVerified ? "block" : "none",
              padding: "4px 16px",
              borderRadius: "100px",
              backgroundColor: news.isReal ? "#23C25F" : "#D83232",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "150%",
            }}
          >
            {news.isReal ? "TRUE" : "FALSE"}
          </div>
        </div>
      </div>

      <div style={{ fontSize: "16px", lineHeight: "150%" }}>
        {news.description}
      </div>

      {!(news.isVerified && !news.isReal) && (
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          <div
            className={`share-btn ${
              news.status === CARD_STATUS.verifying ||
              (news.isVerified && !news.isReal)
                ? "disabled"
                : ""
            }`}
            style={{
              maxWidth: "197px",
              paddingTop: "4px",
              paddingBottom: "4px",
              width: "100%",

              color: "#fff",
              fontSize: "14px",
              borderRadius: "5px",
              lineHeight: "150%",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
            }}
            onClick={() => {
              if (
                news.status === CARD_STATUS.default ||
                (news.isVerified && news.isReal)
              ) {
                //todo: share logic
                handleShareCard(news);
              }
            }}
          >
            <img src={share} alt="share" />
            <div>分享</div>
          </div>
          <div
            className={`verify-btn ${
              news.status === CARD_STATUS.verifying ? "disabled" : ""
            }`}
            style={{
              maxWidth: "197px",
              width: "100%",
              paddingTop: "4px",
              paddingBottom: "4px",
              fontSize: "14px",
              borderRadius: "5px",
              lineHeight: "150%",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
            }}
            onClick={() => {
              handleVerifyCard(news);
            }}
          >
            {!news.isVerified &&
            (news.status === CARD_STATUS.default ||
              news.status === CARD_STATUS.disabled) ? (
              <img src={verify} alt="verify" />
            ) : null}
            {news.status === CARD_STATUS.verifying ? (
              <img className="loading-btn" src={loading} alt="loading" />
            ) : null}
            {news.isVerified && news.isReal ? (
              <img src={close} alt="close" />
            ) : null}
            <div
              onClick={() => {
                handleVerifyCard(news);
              }}
            >
              {news.isVerified && (news.isReal ? "忽略" : "忽略")}
              {news.status === CARD_STATUS.verifying && "查證中"}
              {(news.status === CARD_STATUS.default ||
                news.status === CARD_STATUS.disabled) &&
                "查證"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
