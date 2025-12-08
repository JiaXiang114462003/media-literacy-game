import React, { useState, useEffect } from 'react';
import './MainMenu.css'; 

import userIcon from '../../assets/user.png';
import shareIcon from '../../assets/share.png';
import verifyIcon from '../../assets/verify.png';

const SocialCard = ({ type, isAnimating }) => {
    return (
        <div className={`social-card ${type} ${isAnimating ? 'animating' : ''}`}>
            {/* Header */}
            <div className="card-header">
                <img src={userIcon} alt="User" className="user-avatar" />
                <div className="user-info">
                    <h4>資訊來源</h4>
                    <span>上午 11:16:27</span>
                </div>
            </div>

            {/* Content */}
            <div className="card-content">
                <p>
                    資訊內容資訊內容資訊內容資訊內容資訊內容資訊內容
                    資訊內容資訊內容資訊內容...
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
                    <h1 className="game-title">Click or Check?</h1>
                    <h2 className="game-subtitle">遊戲說明</h2>
                    <p className="game-description">
                        你即將扮演社群媒體的總編輯，面對如洪水般湧入的動態消息，你只有 60 秒的時間做出決定。<br />
						按下「分享」，你可以瞬間獲得流量與粉絲，但若是假新聞，你的社會信任將瞬間崩塌；<br />
						按下「查證」，你能守護真相，但代價是寶貴的 5 秒鐘與可能流失的熱度。<br />
						是成為被流量綁架的內容農場？還是無人問津的孤獨清流？<br />
						在這場沒有標準答案的賽局裡，請試著在「粉絲熱度」與「社會信任」之間，找到那條唯一的生存鋼索。
                    </p>
                    <button className="start-button" onClick={onStartGame}>
                        開始遊戲
                    </button>
                </div>

                {/* 右側：視覺堆疊區塊 */}
                <div className="right-section">
                    {/* 背景卡片 1 (右上) */}
                    <SocialCard type="card-bg-1" isAnimating={isAnimating} />
                    
                    {/* 背景卡片 2 (右下) */}
                    <SocialCard type="card-bg-2" isAnimating={isAnimating} />
                    
                    {/* 主要卡片 (中間) */}
                    <SocialCard type="card-main" isAnimating={isAnimating} />
                </div>

            </div>
        </div>
    );
}