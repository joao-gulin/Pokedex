// Main.js
import { useState, useEffect } from "react";
import axios from "axios";
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
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
      const pokemonDetails = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const detailsResponse = await axios.get(pokemon.url);
          return {
            name: detailsResponse.data.name,
            sprite: detailsResponse.data.sprites.front_default,
            // Array map for the types in case a pokemon has more than one type
            types: detailsResponse.data.types.map((typeInfo) => typeInfo.type.name)
          }
        })
      )
      setAllPokemon(pokemonDetails)
      setFilteredPokemon(pokemonDetails) // Start with no filter
    } catch (error) {
      console.error("Error fetching data:", error)
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
          <Card
            key={i}
            imageUrl={pokemon.sprite}
            name={pokemon.name}
            types={pokemon.types}
          />
        ))}
      </div>
    </main>
  );
}

