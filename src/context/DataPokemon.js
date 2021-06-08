import React from "react";

const PokemonContext = React.createContext({
  favoritePokemons: [],
  ImagePokemons:[],
  idPokemon:[],
  typePokemon:[],
  abilityPokemon:[],
  updateImagePokemon: (id) => null,
  updateFavoritePokemons: (id) => null,
  updateIdPokemon:(id) => null,
  updateTypePokemon:(id) => null,
  updateabilityPokemon:(id) => null
});

export const DataPokemonProvider = PokemonContext.Provider;

export default PokemonContext;
