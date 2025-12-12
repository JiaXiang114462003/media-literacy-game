import React, { useState, useEffect } from 'react';
import './MainMenu.css'; 

import userIcon from '../../assets/user.png';
import shareIcon from '../../assets/share.png';
import verifyIcon from '../../assets/verify.png';
import { NEWS_DATABASE } from '../../data/newsDatabase';

// 從資料庫隨機取得指定數量的新聞
const getRandomNews = (count) => {
    const shuffled = [...NEWS_DATABASE].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count).map(news => ({
        ...news,
        // 為每個新聞預先決定要顯示哪個標題樣式
        titleIndex: Math.floor(Math.random() * 3)
    }));
};

const SocialCard = ({ type, isAnimating, news }) => {
    // 資訊來源對應 titles 中的標題
    const displayTitle = news?.titles?.[news.titleIndex]?.name || news?.title || '資訊來源';
    // 內容對應 description
    const displayContent = news?.description || '資訊內容';
    
    return (
        <div className={`social-card ${type} ${isAnimating ? 'animating' : ''}`}>
            {/* Header */}
            <div className="card-header">
                <img src={userIcon} alt="User" className="user-avatar" />
                <div className="user-info">
                    <h4>{displayTitle}</h4>
                    <span>上午 11:16:27</span>
                </div>
            </div>

            {/* Content */}
            <div className="card-content">
                <p>
                    {displayContent}
                </p>
            </div>

            {/* Actions */}
            <div className="card-actions">
                <div className="action-btn share">
                    <img src={shareIcon} alt="Share" className="btn-icon" style={{filter: 'brightness(0) invert(1)'}} /> 
                    <span>分享</span>
                </div>
                <div className="action-btn verify">
                    <img src={verifyIcon} alt="Verify" className="btn-icon" style={{opacity: 0.6}} />
                    <span>查證</span>
                </div>
            </div>
        </div>
    );
};


export default function MainMenu({ onStartGame }) {
    const [isAnimating, setIsAnimating] = useState(true);
    // 使用函數初始化來確保只在組件首次掛載時隨機取得新聞
    const [randomNews] = useState(() => getRandomNews(3));

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="main-menu">
            <div className="content-wrapper">
                
                {/* 左側：文字區塊 */}
                <div className="left-section">
                    {/* 第一層級：標題與介紹 */}
                    <div className="intro-section">
                        <h1 className="game-title">Click or Check?</h1>
                        <p className="game-description">
                            你即將扮演社群媒體的總編輯，面對如洪水般湧入的動態消息，你只有 60 秒的時間做出決定。<br />
                            是成為被流量綁架的內容農場？還是無人問津的孤獨清流？<br />
                            在這場沒有標準答案的賽局裡，請試著在「粉絲熱度」與「社會信任」之間，找到那條唯一的生存鋼索。
                        </p>
                    </div>
                    
                    {/* 第二層級：遊戲說明 */}
                    <div className="instruction-section">
                        <h2 className="game-subtitle">遊戲說明</h2>
                        <p className="game-description">
                            按下「分享」，你可以瞬間獲得流量與粉絲，但若是假新聞，你的社會信任將瞬間崩塌；<br />
                            按下「查證」，你能守護真相，但代價是寶貴的 5 秒鐘與可能流失的熱度。
                        </p>
                    </div>
                    
                    <button className="start-button" onClick={onStartGame}>
                        開始遊戲
                    </button>
                </div>

                {/* 右側：視覺堆疊區塊 */}
                <div className="right-section">
                    {/* 背景卡片 1 (右上) */}
                    <SocialCard type="card-bg-1" isAnimating={isAnimating} news={randomNews[0]} />
                    
                    {/* 背景卡片 2 (右下) */}
                    <SocialCard type="card-bg-2" isAnimating={isAnimating} news={randomNews[1]} />
                    
                    {/* 主要卡片 (中間) */}
                    <SocialCard type="card-main" isAnimating={isAnimating} news={randomNews[2]} />
                </div>

            </div>
        </div>
    );
}