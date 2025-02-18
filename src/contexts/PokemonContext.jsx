import React, { createContext, useContext, useState, useMemo, useEffect } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [allPokemon, setAllPokemon] = useState(() => {
    const storedPokemon = localStorage.getItem("allPokemon")
    return storedPokemon ? JSON.parse(storedPokemon) : []
  });

  useEffect(() => {
    localStorage.setItem("allPokemon", JSON.stringify(allPokemon))
  }, [allPokemon])

  const value = useMemo(() => ({ allPokemon, setAllPokemon }), [allPokemon]);

  return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>;
};

export const usePokemon = () => {
  return useContext(PokemonContext);
};

