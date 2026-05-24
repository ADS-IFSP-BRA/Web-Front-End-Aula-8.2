import { useState } from 'react'
import './App.css'
import { v4 as uuid } from "uuid"

function App() {

  const [gameName, setgame] = useState('')
  const [gameImage, setgameImage] = useState('')
  const [gameList, setGameList] = useState([])

  function saveGame() {

    const gamecard = {
      id: uuid(),
      name: gameName,
      gameImage: gameImage
    }

    const list = [...gameList, gamecard]

    setGameList(list)

    localStorage.setItem("jogos", JSON.stringify(list))
  }

  return (
    <>
      <h1>Biblioteca pokemón</h1>

      <header>
        <form onSubmit={(e) => {
          e.preventDefault()

          saveGame()
          setgame("")
          // setgameImage("") não funciona direito
        }}>

          <input
            type="text"
            value={gameName}
            placeholder='Digite aqui o nome do pokémon :'
            onChange={(e) => {
              setgame(e.target.value)
            }}
          />

          <input
            type="file"
            accept='image/*'
            onChange={(e) => {

              const file = e.target.files[0]

              if (file) {
                const imageUrl = URL.createObjectURL(file)
                setgameImage(imageUrl)
              }

            }}
          />

          <input type="submit" />

        </form>
      </header>

      <main>

        {gameList.map((game) => {

          return (
            <div key={game.id} className='game-card'>
              <img
                className='game-image'
                src={game.gameImage}
                alt={game.name}
              />

              <h2>{game.name}</h2>
              <button onClick={() => {
                const newList = gameList.filter((item) => item.id !== game.id)
                setGameList(newList)
                localStorage.setItem("jogos", JSON.stringify(newList))
              }}>Remover</button>
            </div>
          )
        })}

      </main>
    </>
  )
}

export default App