import React from "react"
import { useParams } from "react-router-dom"
import { usePokemon } from "../contexts/PokemonContext"
import "../styles/PokemonDetails.css"

export default function PokemonDetails() {
  const { name } = useParams()
  const { allPokemon } = usePokemon();

  const pokemon = allPokemon.find((p) => p.name === name);

  const getTypeClass = (type) => `type-${type.toLowerCase()}`

  const displayedMoves = pokemon.moves.slice(0, 10);

  return (
    <div className="pokemon-details-grid">
      <div className="pokemon-image-card">
        <img src={pokemon.sprite} alt={pokemon.name} />
      </div>

      <div className="pokemon-info-card">
        <h1>{pokemon.name}</h1>
        <div className="section-divider" />

        <h2>Type</h2>
        <div className="pokemon-types">
          {pokemon.types.map((type, index) => (
            <span key={index} className={`type-badge ${getTypeClass(type)}`}>
              {type}
            </span>
          ))}
        </div>

        <div className="section-divider" />
        <div className="moves">
          <h2>Moves</h2>
          <ul>
            {displayedMoves.map((move, index) => (
              <li key={index}>{move}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
