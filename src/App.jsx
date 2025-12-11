import { useState } from "react";
import GameScreen from "./components/Screens/GameScreen/GameScreen";
import ResultScreen from "./components/Screens/ResultScreen/ResultScreen";
import MainMenu from "./components/Screens/MainMenu";
import { useSound } from "./hooks/useSound";
import { resetNewsIndex } from "./hooks/useCardsGame";

function App() {
  // 初始值：trust 與 fans 都從 0 開始
  const initialTrust = 0;
  const [screen, setScreen] = useState("menu");
  const [trust, setTrust] = useState(initialTrust);
  const [fans, setFans] = useState(0);
  const [round, setRound] = useState(1);

  // 音效系統
  const { sounds, bgm } = useSound(true);

  return (
    <>
      {screen === "menu" && (
        <MainMenu
          onStartGame={() => {
            sounds.buttonClick();
            setRound(1);
            setTrust(initialTrust);
            setFans(0);
            resetNewsIndex(); // 從主選單開始新遊戲時重置索引
            setScreen("game");
          }}
        />
      )}
      {screen === "game" && (
        <GameScreen
          round={round}
          initialTrust={trust}
          initialFans={fans}
          initialTime={30}
          sounds={sounds}
          bgm={bgm}
          onTimeUp={(finalTrust, finalFans) => {
            // 停止所有音效
            sounds.stopAll();
            // 存下遊戲結束時的 trust 與 fans 值，確保 ResultScreen 顯示一致
            setTrust(typeof finalTrust === "number" ? finalTrust : trust);
            setFans(typeof finalFans === "number" ? finalFans : fans);
            setScreen("result");
          }}
        />
      )}{" "}
      {screen === "result" && (
        <ResultScreen
          round={round}
          trust={trust}
          fans={fans}
          bgm={bgm}
          onNext={() => {
            sounds.buttonClick();
            // 按下結果頁的按鈕：若目前回合小於 2，進入下一回合；否則重開回合 1
            if (round < 2) {
              setRound((r) => r + 1);
              setScreen("game");
            } else {
              // 重開遊戲
              setRound(1);
              setTrust(initialTrust);
              setFans(0);
              resetNewsIndex(); // 重置新聞索引
              setScreen("game");
            }
          }}
        />
      )}
    </>
  );
}

export default App;
