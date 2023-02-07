import axios from "axios";

// Api URL 'https://bp-pokemons.herokuapp.com/'

const pokemonApi = axios.create({
  baseURL: `${process.env.PUBLIC_URL}/`
});

export const getPokemon = async (callback) => {
  try {
    const result = await pokemonApi.get('pokemon.json');
    callback(result.data);
  } catch {
    alert('Ocurrio un error')
  }
};

export const createPokemon = async (pokemon, callback) => {
  // change to post
  try {
    const result = await pokemonApi.get('pokemon.json', pokemon)
    callback(result);
  } catch {
    alert('Ocurrio un error')
  }
};

export const updatePokemon = async (pokemon, callback) => {
  // change to put
  try {
    const result = await pokemonApi.get('pokemon.json', pokemon);
    callback(result);
  } catch {
    alert('Ocurrio un error')
  }
}

export const deletePokemon = async (id, callback) => {
  //change to delete
  try {
    const result = await pokemonApi.get('pokemon.json');
    callback(result);
  } catch {
    alert('Ocurrio un error')
  }
}
