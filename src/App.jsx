import "./App.css";
import NewsCard from "./components/Game/NewsCard";
import LoadingScreen from "./components/Screens/GameScreen";

function App() {
  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <LoadingScreen></LoadingScreen>
      </div>
    </>
  );
}

export default App;
