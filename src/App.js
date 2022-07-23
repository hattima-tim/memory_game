import { useState } from "react";
import CardsLogic from "./components/cardsLogic";
import "./App.css"
function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(3);
  return (
    <>
      <h1>Memory Card Game</h1>
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
