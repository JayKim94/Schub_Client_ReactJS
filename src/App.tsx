import React, { useEffect, useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { UI } from './components/UI';
import { Game } from './models/Game';

function App() {
  const [game, setGame] = useState<Game>();

  useEffect(() => {
    setGame(new Game());
  }, []);

  return (
    <div className="App">
      <UI />
      <BackgroundCanvas />
    </div>
  );
}

export default App;
