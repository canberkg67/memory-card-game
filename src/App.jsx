import './App.css'
import Scoreboard from './components/Scoreboard'
import CardGrid from './components/CardGrid'

function App() {

  const cards = [
  {
    id: 1,
    name: 'Bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 4,
    name: 'Charmander',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
  {
    id: 7,
    name: 'Squirtle',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  },
];


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

      <section className="game-board">
        <CardGrid cards={cards} onCardClick={(id) => console.log("Clicked card ID: ", id)} />
      </section>
    </main>
  )
}

export default App
