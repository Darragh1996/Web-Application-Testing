import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const addStrike = () => {
    if (strikes == 2) {
      alert("You're out!");
      setStrikes(0);
      setBalls(0);
    } else {
      setStrikes(strikes + 1);
    }
  };

  const addBall = () => {
    if (balls == 3) {
      alert("You're out!");
      setStrikes(0);
      setBalls(0);
    } else {
      setBalls(balls + 1);
    }
  };

  const addFoul = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1);
    }
  };

  const hit = () => {
    setStrikes(0);
    setBalls(0);
  };

  return (
    <div className="App">
            
      <header className="App-header">
                
        <Display balls={balls} strikes={strikes} />
                
        <Dashboard
          addBall={addBall}
          addStrike={addStrike}
          addFoul={addFoul}
          hit={hit}
        />
              
      </header>
          
    </div>
  );
}

export default App;
