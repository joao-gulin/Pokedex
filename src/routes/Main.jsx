import { useState, useEffect } from "react"
import Card from "../components/Card"

export default function Main() {
  // Storing pokemon Data on react states
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  // function to fetch the pokeapi data
  function fetchPokemons() {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            // Fetching details from the pokemon(name, front image)
            const detailsResponse = await fetch(pokemon.url);
            if (!detailsResponse.ok) {
              throw new Error('Network response was not ok');
            }
            const detailsData = await detailsResponse.json();
            return {
              name: detailsData.name,
              sprite: detailsData.sprites.front_default,
            };
          })
        );
        setPokemonData(pokemonDetails);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemonList();
  }

  useEffect(() => {
    fetchPokemons()
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main>
      <h1>Pokedex</h1>
      <ul>
        {pokemonData.map((pokemon, i) => (
          <Card
            key={i}
            imageUrl={pokemon.sprite}
            name={pokemon.name}
          />
        ))}
      </ul>
    </main>
  )
}
