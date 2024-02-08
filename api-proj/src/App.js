import { useEffect, useState } from "react";
import { Game } from "./Model/Game";
import './App.css';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7075/api/GameModels')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => {
      setGames(data);
    });
  }, [])

  const populateList = () => {
    let gameList = [];

  for (let game of games) {
    console.log(games)
    gameList.push(<li onClick={() => console.log('hi')} key={game.id}>{game.name}</li>)
  }

  return(
    <>
    {gameList}
    </>
  );
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className='text'>
          Game Finder
        </div>
        <div className='gameList'>
          <ul>
          {populateList()}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
