import './App.css'
import Scoreboard from './components/Scoreboard'
import CardGrid from './components/CardGrid'

function App() {


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
        <CardGrid cards={[]} onCardClick={() => {}} />
      </section>
    </main>
  )
}

export default App
