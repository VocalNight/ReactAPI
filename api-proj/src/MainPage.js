import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import './App.css';

function MainPage() {
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
            gameList.push(
                <li key={game.id}><Link to={"/GameModel/" + game.id} state={game}>{game.name}</Link></li>
            )
        }

        return (
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
                <div>
                    <ul>
                        {populateList()}
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default MainPage;
