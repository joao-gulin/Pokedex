import React from "react"
import { useParams } from "react-router-dom"
import { usePokemon } from "../contexts/PokemonContext"

export default function PokemonDetails() {
  const { name } = useParams()
  const { allPokemon } = usePokemon();

  const pokemon = allPokemon.find((p) => p.name === name);

  return (
    <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprite} alt={pokemon.name} />
    </>
  )
}
