import { useState, useEffect } from "react"

export default function Main() {
  // Storing pokemon Data on react states
  const [pokemonData, setPokemonData] = useState(null)

  //API fetch
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/")
      .then(response => response.json())
      .then(data => setPokemonData(data.message))
  }, [])

  console.log(pokemonData);

  return (
    <main>

    </main>
  )
}
