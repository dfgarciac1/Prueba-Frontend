import axios from "axios";

export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};

export const getPokemon = async (limit = 25, offset = 0) => {
  let Pokemons;
  var nombreTotales;
  let nombres;
  var namesPokemon = [];
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((resp) => {
      Pokemons = resp.data;
      let arrayPokemons = Pokemons.results;
      nombreTotales = arrayPokemons.map(({ name }) => ({ name }));
      for (nombres of nombreTotales.values()) {
        namesPokemon.push(nombres.name);
      }
    });

  return namesPokemon;
};

export const getPokemonData = async (name) => {
  let dataPokemon;
  try {
    return await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then((resp) => {
        dataPokemon = resp.data;
        let Pokemones = dataPokemon;
        return Pokemones;
      });
  } catch (err) {}
};
