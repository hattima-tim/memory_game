import { useState } from "react";
import CardsLogic from "./components/cardsLogic";
import "./App.css";
function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <>
      <h1>Memory Card Game</h1>
      <p id="game_info">
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      <div className="score">
        <p>{`Score: ${score}`}</p>
        <p>Total Images: 22</p>
        <p>{`Best Score: ${bestScore}`}</p>
      </div>
      <CardsLogic
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </>
  );
}

export default App;
