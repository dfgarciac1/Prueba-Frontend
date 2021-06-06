import React, { useState, useContext } from "react";
import "../styles/index.scss";
import PokemonContext from "../context/DataPokemon";

export default function PokeImage(props) {
  const { pokemon } = props;
  const [Clickpokemons, setClickPokemon] = useState([]);
  const { favoritePokemons, updateInfoPokemon } = useContext(PokemonContext);
  const { ImagePokemons, updateImagePokemon } = useContext(PokemonContext);
  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;
  console.log(favoritePokemons.includes(pokemon.name));
  const clickHeart = async (e) => {
    e.preventDefault();
    updateInfoPokemon(pokemon.name);
    updateImagePokemon(pokemon.sprites.front_default);
  };

  return (
    <div className="pokemon-image-card">
      <div className="pokemon-img-card">
        <img
          onClick={() => setClickPokemon(pokemon.id)}
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <button onClick={clickHeart} className="pokemon-heart-btn">
        <div className="pokemon-favorite">{heart}</div>
      </button>
    </div>
  );
}
