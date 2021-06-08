import React, { useState, useContext } from "react";
import "../styles/index.scss";
import PokemonContext from "../context/DataPokemon";

export default function PokeImage(props) {
  const { pokemon } = props;
  const [Clickpokemons, setClickPokemon] = useState([]);
  const { favoritePokemons, updateInfoPokemon } = useContext(PokemonContext);
  const { ImagePokemons, updateImagePokemon } = useContext(PokemonContext);
  const { idPokemon, updateIdPokemon } = useContext(PokemonContext);
  const { typePokemon, updateTypePokemon } = useContext(PokemonContext);
  const { abilityPokemon, updateabilityPokemon } = useContext(PokemonContext);
  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;
  var   types
  const clickHeart = async (e) => {
    e.preventDefault();
    updateInfoPokemon(pokemon.name);
    updateImagePokemon(pokemon.sprites.front_default);
    updateIdPokemon(pokemon.id)


     let  type=((pokemon.types.map((type, idx) => {
              return (
              type.type.name,
              updateTypePokemon(type.type.name) 
              );
            })) )  
  
  
   let  ability=((pokemon.abilities.map((ability, idx) => {
              return (
              ability.ability.name,
              updateabilityPokemon( ability.ability.name)
              );
            })) )  


        

  };




           
            

   
          
  return (
    <div className="pokemon-image-card">
      <div className="pokemon-img-card">
        <img
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
