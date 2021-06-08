import React from "react";
import Pokemon from "./Pokemon";
import PokemonImage from "./PokemonImage";
import Pagination from "./Pagination";

import "../styles/index.scss";

const Pokedex = (props) => {
  const { pokemon, pokemons ,page, setPage, total ,loading} = props;
  
  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, 120 - 1);
    setPage(nextPage);
  };

  return (
    <div>
      <div className="header">
      
       <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      
        <h1>Pokedex</h1>
        
        <div className="Pokedex">
            {loading ? (
        <div>Cargando pokemones...</div>
      ) :(
          <div className="pokedex-grid">
            {pokemons.map((pokemon, idx) => {
              return <PokemonImage pokemon={pokemon} key={pokemon.name} />;
            })}
          </div>
              )}

          <div className="info-Pokemon">
            <div className="info-header">
            
            {pokemons.map((pokemon, idx) => {
             if(idx<1){
              return <Pokemon pokemon={pokemon} key={pokemon.name} />};
            })}
           
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pokedex;
