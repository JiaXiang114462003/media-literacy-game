import React from "react";
import user from "../../assets/user.png";
import verify from "../../assets/verify.png";
import close from "../../assets/close.png";
import loading from "../../assets/loading.png";
import share from "../../assets/share.png";
import "../../styles/card.css";
import { CARD_STATUS, useCard } from "../../hooks/useCard";
import { NEWS_DATABASE } from "../../data/newsDatabase";
/**
 * 新聞卡片元件
 * 用於顯示漂浮的新聞卡片 (Feed item)
 */
export default function NewsCard() {
  const news = NEWS_DATABASE[1];
  const { title, description, status, verifyCard } = useCard(news);
  return (
    <div
      className="news-card"
      style={{
        width: "442px",
        height: "212px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "28px",
        borderRadius: "10px",
        border:
          status === CARD_STATUS.true
            ? "4px solid #23C25F"
            : status === CARD_STATUS.false
            ? "4px solid #D83232"
            : "4px solid transparent",
        boxShadow:
          status === CARD_STATUS.verifying
            ? "0px 0px 20px 0px #FFD865"
            : "none",
        filter: status === CARD_STATUS.disabled ? "blur(1.5px)" : "none",
        pointerEvents: status === CARD_STATUS.disabled ? "none" : "auto",
        cursor: status === CARD_STATUS.disabled ? "default" : "pointer",
      }}
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
              {title}
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
              display: status !== CARD_STATUS.default ? "block" : "none",
              padding: "4px 16px",
              borderRadius: "100px",
              backgroundColor:
                status === CARD_STATUS.true
                  ? "#23C25F"
                  : status === CARD_STATUS.false
                  ? "#D83232"
                  : "transparent",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "150%",
              opacity: status !== CARD_STATUS.default ? 1 : 0,
              transform:
                status !== CARD_STATUS.default ? "scale(1)" : "scale(0.8)",
            }}
          >
            {status === CARD_STATUS.true ? "TRUE" : "FALSE"}
          </div>
        </div>
      </div>

      <div style={{ fontSize: "16px", lineHeight: "150%" }}>{description}</div>

      {status !== CARD_STATUS.false && (
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          <div
            className={`share-btn ${
              status === CARD_STATUS.verifying ? "disabled" : ""
            }`}
            style={{
              flexGrow: 1,
              padding: "4px 72px",

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
                status === CARD_STATUS.default ||
                status === CARD_STATUS.true
              ) {
                //todo: share logic
              }
            }}
          >
            <img src={share} alt="share" />
            <div>分享</div>
          </div>
          <div
            className={`verify-btn ${
              status === CARD_STATUS.verifying ? "disabled" : ""
            }`}
            style={{
              flexGrow: 1,
              padding: "4px 72px",
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
              if (status === CARD_STATUS.default) {
                verifyCard();
              }
            }}
          >
            {status === CARD_STATUS.default ? (
              <img src={verify} alt="verify" />
            ) : null}
            {status === CARD_STATUS.verifying ? (
              <img className="loading-btn" src={loading} alt="loading" />
            ) : null}
            {status === CARD_STATUS.false ? (
              <img src={close} alt="close" />
            ) : null}
            <div>
              {status === CARD_STATUS.default
                ? "查證"
                : status === CARD_STATUS.verifying
                ? "查證中"
                : "忽略"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
