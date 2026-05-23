
import { use, useState } from 'react'
import './App.css'
import { v4 as uuid } from "uuid"

function App() {  

  const [gameName , setgame] = useState('')
  const [gameImage , setgameImage] = useState('')
  const [gameList , setGameList] = useState()

  function saveGame(){
    const id = uuid()
    const gamecard = JSON.stringify({"id" : id , "name" : gameName, "gameImage" : gameImage , })
    const list = [...gameList , gamecard]
    localStorage.setItem("jogos" , list)
    setGameList[localStorage.getItem("jogos")]
  }

  return (
    <>

    <h1>Biblioteca pokemón</h1>

    <header>
      <form action="" onSubmit={(e) => {
          e.preventDefault()
          // setgame(e.target.value)
          // localStoragelogica
          
          saveGame()
          setgame("")
          setgameImage("")

        }}>

        <input 
        type="text"
        value={gameName}
        placeholder='Digite aqui o nome do pokémon :'
        onChange={(e) => {
          e.preventDefault()
          setgame(e.target.value)
        }}/>

        <input 
        value={gameImage}
        type="file" 
        onChange={(e) => {
          e.preventDefault()
          setgameImage(e.target.value)
        }}
        />

        <input type="submit" />

      </form>
    </header>
    <main>

      {
        gameList.map(
          game => (
            <div key={game.id}>

              <img src={game.gameImage} alt="" />

              <h1>{game.name}</h1>

            </div>
          )
        )
      }

    </main>

    </>
  )
}

export default App
