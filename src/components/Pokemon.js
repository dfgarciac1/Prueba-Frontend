import React, { useContext } from "react";
import "../styles/index.scss";
import DataPokemon from "../context/DataPokemon";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateInfoPokemon } = useContext(DataPokemon);
  const { ImagePokemons, updateImagePokemon } = useContext(DataPokemon);
  return (
    <div
      className="pokemon-card"
    >
      <div className="pokemon-img-card">
        <img
          className="pokemon-img"
          src={ImagePokemons[0]}
        />
      </div>
      <div className="card-body">
        <div className="card-top">

        </div>
        <div className="card-medium">
          <div className="pokemon-type">
          
          </div>
        
        </div>
      </div>
    </div>
  );
};
export default Pokemon;
