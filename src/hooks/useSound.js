import { useRef, useEffect, useCallback } from 'react';


const SOUND_FILES = {
    // 按鈕音效
    buttonClick: '/sounds/button-click.mp3',      // 開始遊戲按鈕
    share: '/sounds/share.mp3',                    // 分享按鈕
    verify: '/sounds/verify.mp3',                  // 查證按鈕

    // 遊戲事件音效
    cardAppear: '/sounds/card-appear.mp3',         // 新卡片出現
    verifySuccess: '/sounds/verify-success.mp3',   // 查證成功（真新聞）
    verifyFail: '/sounds/verify-success.mp3',      // 查證失敗（假新聞）

    // 背景音樂
    bgmGame: '/sounds/bgm-game.mp3',               // 遊戲中 BGM
    bgmResult: '/sounds/bgm-result.mp3',           // 結果畫面 BGM

    // 系統音效
    countdown: '/sounds/countdown.mp3',            // 倒數計時警告音（最後10秒）
    gameOver: '/sounds/game-over.mp3',             // 遊戲結束
};

/**
 * 音效管理 Hook
 * @param {boolean} enabled - 是否啟用音效
 * @returns {Object} 音效控制方法
 */
export function useSound(enabled = true) {
    const audioRefs = useRef({});
    const bgmRef = useRef(null);

    // 預載所有音效
    useEffect(() => {
        if (!enabled) return;

        Object.entries(SOUND_FILES).forEach(([key, src]) => {
            const audio = new Audio(src);
            audio.preload = 'auto';
            
            if (key === 'bgmGame') {
                audio.loop = true;
                audio.volume = 0.25; 
            } else if (key === 'bgmResult') {
                audio.loop = false; 
                audio.volume = 0.7;
            } else {
                audio.volume = 0.5; 
            }
            
            audioRefs.current[key] = audio;
        });

        return () => {
            // 清理所有音效
            Object.values(audioRefs.current).forEach(audio => {
                audio.pause();
                audio.src = '';
            });
            audioRefs.current = {};
        };
    }, [enabled]);

    // 播放音效
    const playSound = useCallback((soundName) => {
        if (!enabled) return;
        
        const audio = audioRefs.current[soundName];
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(err => {
                console.log('Sound play failed:', err.message);
            });

            if (soundName === 'verify') {
                setTimeout(() => {
                    audio.pause();
                    audio.currentTime = 0;
                }, 5000);
            }
        }
    }, [enabled]);

    // 播放 BGM
    const playBGM = useCallback((bgmName) => {
        if (!enabled) return;

        // 先停止目前的 BGM
        if (bgmRef.current) {
            bgmRef.current.pause();
            bgmRef.current.currentTime = 0;
        }

        const audio = audioRefs.current[bgmName];
        if (audio) {
            bgmRef.current = audio;
            audio.play().catch(err => {
                console.log('BGM play failed:', err.message);
            });
        }
    }, [enabled]);

    // 停止 BGM
    const stopBGM = useCallback(() => {
        if (bgmRef.current) {
            bgmRef.current.pause();
            bgmRef.current.currentTime = 0;
            bgmRef.current = null;
        }
    }, []);

    // 停止所有音效（包括 BGM）
    const stopAll = useCallback(() => {
        Object.values(audioRefs.current).forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
        bgmRef.current = null;
    }, []);

    // 設定音量
    const setVolume = useCallback((volume) => {
        Object.entries(audioRefs.current).forEach(([key, audio]) => {
            if (key.startsWith('bgm')) {
                audio.volume = volume * 0.6; // BGM 音量較小
            } else {
                audio.volume = volume;
            }
        });
    }, []);

    return {
        playSound,
        playBGM,
        stopBGM,
        stopAll,
        setVolume,
        sounds: {
            // 按鈕音效
            buttonClick: () => playSound('buttonClick'),
            share: () => playSound('share'),
            verify: () => playSound('verify'),
            // 遊戲事件
            cardAppear: () => playSound('cardAppear'),
            verifySuccess: () => playSound('verifySuccess'),
            verifyFail: () => playSound('verifyFail'),
            // 系統音效
            countdown: () => playSound('countdown'),
            gameOver: () => playSound('gameOver'),
            // 停止所有音效
            stopAll: () => stopAll(),
        },
        bgm: {
            game: () => playBGM('bgmGame'),
            result: () => playBGM('bgmResult'),
            stop: stopBGM,
        }
    };
}

export default useSound;
