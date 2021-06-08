
import React from "react";
import Pokedex from "./components/Pokedex";
import Search from "./components/search";
import { getPokemon, getPokemonData, searchPokemon } from "./getNamePokemon";
import {DataPokemonProvider}  from "./context/DataPokemon";
const { useState, useEffect } = React;

export default function App() {
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [searching, setSearching] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [imagePokemon, setImagePokemon] = useState([]);
  const [idPokemon, setidPokemon] = useState([]);
  const [typePokemon, setTypePokemon] = useState([]);
  const [abilityPokemon, setAbilityPokemon] = useState([]);
  const localStorageKey = "favorite_pokemon";

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const callPokemon = await getPokemon(25,25 *page);
      const Pokemons = callPokemon.map(async (element) => {
        return await getPokemonData(element);
      });
      const results = await Promise.all(Pokemons);
      setPokemons(results);
    setLoading(false);
     setTotal(125);
   setNotFound(false);
    } catch (err) {}
  };
  
  
  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorites(pokemons);
  
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);
 
  useEffect(() => {
    if (!searching) {
      fetchPokemon();
    }
  }, [page]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemon();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const lowerPokemon=pokemon.toLowerCase()
    const result = await searchPokemon(lowerPokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
     setPokemons([result]);
      setPage(0);
      setTotal(1);
   
    }
    setLoading(false);
    setSearching(false);
  };
  const updateFavoritePokemons = (name) => {
     const updated = [...favorites];
     const isFavorite = updated.indexOf(name);
     if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
     } else {
       updated.push(name);
     }
     setFavorites(updated);
     window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
   };

   const updateImagePokemon = (name) => {
    const updated = [...imagePokemon];
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
     updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
   setImagePokemon(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };

 const updateIdPokemon = (name) => {
    const updated = [...idPokemon];
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
     updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
   setidPokemon(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };
   const updateTypePokemon = (name) => {
    const updated = [...typePokemon];
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
     updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
   setTypePokemon(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };
  
    const updateAbilityPokemon = (name) => {
    const updated = [...abilityPokemon];
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
     updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
   setAbilityPokemon(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };


  return (
    <DataPokemonProvider
    value={{
      favoritePokemons: favorites,
      ImagePokemons:imagePokemon,
      idPokemon:idPokemon,
      typePokemon:typePokemon,
      abilityPokemon:abilityPokemon,
      updateInfoPokemon: updateFavoritePokemons,
      updateImagePokemon:updateImagePokemon,
      updateIdPokemon: updateIdPokemon,
      updateTypePokemon:updateTypePokemon,
      updateabilityPokemon:updateAbilityPokemon,
    }}
  >
    <div>
      <div className="header">
        <Search onSearch={onSearch} />
      </div>
      {notFound ? (
        <div className="not-found-text">
          No se encontro el Pokemon que buscabas
          <img
           alt="Error 404 "
           src="https://i.imgur.com/PaOpjm2.jpg"
          />
        </div>
      ) : (
        <Pokedex
          loading={loading}
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}

        />
      )}
    </div>
    </DataPokemonProvider>
  );
}
