import axios from "axios";

const baseURL = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/pkm-msa-evaluation/pokemon'

const pokemonApi = axios.create({
  baseURL
});

export const getPokemon = async (callback) => {
  try {
    const result = await pokemonApi.get('/?idAuthor=1');
    callback(result.data);
  } catch {
    alert('Ocurrio un error')
  }
};

export const createPokemon = async (pokemon, callback) => {
  try {
    const newPokemon = {
      ...pokemon,
      hp: 50,
      attack: parseInt(pokemon.attack),
      defense: parseInt(pokemon.defense),
      idAuthor: 1,
      type: 'Normal'
    }
    const result = await pokemonApi.post('/', newPokemon)
    callback(result.data);
  } catch {
    alert('Ocurrio un error')
  }
};

export const updatePokemon = async (pokemon, callback) => {
  // change to put
  try {
    const newPokemon = {
      ...pokemon,
      hp: 50,
      attack: parseInt(pokemon.attack),
      defense: parseInt(pokemon.defense),
      idAuthor: 1,
      type: 'Normal'
    }
    const result = await pokemonApi.put(`/${pokemon.id}`, newPokemon);
    callback(result);
  } catch {
    alert('Ocurrio un error')
  }
}

export const deletePokemon = async (id, callback) => {
  //change to delete
  try {
    const result = await pokemonApi.delete(`/${id}`);
    callback(result);
  } catch {
    alert('Ocurrio un error')
  }
}
