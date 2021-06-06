import React from "react";

const PokemonContext = React.createContext({
  favoritePokemons: [],
  ImagePokemons:[],
  updateImagePokemon: (id) => null,
  updateFavoritePokemons: (id) => null
});

export const DataPokemonProvider = PokemonContext.Provider;

export default PokemonContext;
