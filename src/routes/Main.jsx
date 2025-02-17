import { useState, useEffect } from "react";
import Card from "../components/Card";
import "../styles/Main.css";

export default function Main() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      filterPokemon(inputValue);
    }, 300); // Debounce delay

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  async function fetchAllPokemon() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const detailsResponse = await fetch(pokemon.url);
          if (!detailsResponse.ok) {
            throw new Error("Network response was not ok");
          }
          const detailsData = await detailsResponse.json();
          return {
            name: detailsData.name,
            sprite: detailsData.sprites.front_default,
          };
        })
      );
      setAllPokemon(pokemonDetails);
      setFilteredPokemon(pokemonDetails);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function filterPokemon(query) {
    const filtered = allPokemon.filter((pokemon) =>
      pokemon.name.includes(query.toLowerCase())
    );
    setFilteredPokemon(filtered);
  }

  return (
    <main>
      <div className="search-bar">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value.toLowerCase())}
          placeholder="Type a Pokemon name"
        />
      </div>

      <div className="cards">
        {filteredPokemon.map((pokemon, i) => (
          <Card key={i} imageUrl={pokemon.sprite} name={pokemon.name} />
        ))}
      </div>
    </main>
  );
}
