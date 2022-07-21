import { useState } from "react";
import Cards from "./components/cards";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(3);
  return (
    <>
      <h1>Memory Card Game</h1>
      <Cards
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </>
  );
}

export default App;
