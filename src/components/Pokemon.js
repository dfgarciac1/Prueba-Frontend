import React, { useContext } from "react";
import "../styles/index.scss";
import DataPokemon from "../context/DataPokemon";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons,  } = useContext(DataPokemon);
  const { ImagePokemons } = useContext(DataPokemon);
  const { idPokemon } = useContext(DataPokemon);
  const { typePokemon} = useContext(DataPokemon);	
  const { abilityPokemon} = useContext(DataPokemon);	

  return (
    <div className="pokemon-card"  >
      <div className="pokemon-img-card">
        <img
        
          src={ImagePokemons[0]}
        />
      </div>
      <div className="card-body">
        <div className="card-top">
        
       <p> id: {idPokemon } </p>
       <p> name: {favoritePokemons}</p>
        </div>
        <div className="card-medium">
          <div className="pokemon-type">
          <p>type: {typePokemon}</p>
          </div>
          <div className="pokemon-ability">
          <p>ability: {abilityPokemon}</p>
          </div>
        
        </div>
      </div>
    </div>
  );
};
export default Pokemon;
