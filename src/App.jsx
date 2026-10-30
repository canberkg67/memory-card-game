import './App.css'
import Scoreboard from './components/Scoreboard'
import CardGrid from './components/CardGrid'
import { useState, useEffect } from 'react'

function App() {

  const [cards, setCards] = useState([])

  const [clickedIds, setClickedIds] = useState([])

  const [gameOver, setGameOver] = useState(false)

  //url,id,name,results, sprites, front_default comes from the API response.

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
      .then((response) => response.json())
      .then((data) => {
        const pokemonRequests = data.results.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        );

        Promise.all(pokemonRequests).then((pokemonData) => {
          const formattedCards = pokemonData.map((pokemon) => ({
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.front_default,
          }));

          setCards(formattedCards);
        });
      });
  }, []);

  function handleCardClick(id) {
    if (clickedIds.includes(id)) {
      console.log('You clicked the same card twice! Game over.');
      setGameOver(true);
      return;
    }
    setClickedIds((prevClickedIds) => [...prevClickedIds, id]);
  }

  return (
    <main className="game">
      <header className="game-header">
        <h1>Pokémon Cards in My Mind</h1>
        <ul>
          <li>Click on a Pokemon card only once.</li>
          <li>Cards will flip when one is clicked.</li>
          <li>Do not click on the same card twice.</li>
          <li>Try to surpass your high score!</li>
        </ul>
      </header>

      <section className="game-info">
        <Scoreboard score={0} highScore={0} />
      </section>

      {gameOver && <h2>Game Over!</h2>}

      <section className="game-board">
        <CardGrid cards={cards} onCardClick={handleCardClick} />
      </section>
    </main>
  )
}

export default App
