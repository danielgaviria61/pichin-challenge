import React, { useState, useEffect } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import Table from "../../components/Table";
import TableRow from '../../components/TableRow';
import CreatePokemon from '../../components/CreatePokemon';
import { 
  getPokemon,
  createPokemon,
  updatePokemon,
  deletePokemon
} from '../../utils/api';
import './styles.scss';

const PokemonList = () => {
  const [ pokemon, setPokemon ] = useState([]);
  const [ filteredPokemon, setFilteredPokemon ] = useState([]);
  const [ openForm, setOpenForm ] = useState(false);
  const [ search, setSearch ] = useState('');

  useEffect(() => {
    getPokemon((result) => {
      setPokemon(result);
      setFilteredPokemon(result);
    })
  }, []);

  const handleEditPokemon = (editedPokemon) => {
    updatePokemon(editedPokemon, () => {
      const newPokemonList = pokemon.map((poke) => {
        if(poke.id === editedPokemon.id) return editedPokemon;
        return poke;
      })
      setFilteredPokemon(newPokemonList);
      setPokemon(newPokemonList);
    })
  }

  const handleDeletePokemon = (pokemonData) => {
    deletePokemon(pokemonData.id, () => {
      const newPokemonList = pokemon.filter((poke) => poke.id !== pokemonData.id)
      setFilteredPokemon(newPokemonList);
      setPokemon(newPokemonList);
    })
  }

  const handleCreatePokemon = (pokemonData) => {
    createPokemon(pokemonData, (result) => {
      const newPokemonList = [...pokemon, {...pokemonData, id: result.id}];
      setFilteredPokemon(newPokemonList);
      setPokemon(newPokemonList);
      setOpenForm(false);
    })
  }

  const handleSearch = (value) => {
    setSearch(value);
  }

  useEffect(()=>{
    if(search !== '') {
      const newPokemonList = pokemon.filter(
        (poke) => poke.name.toLowerCase().includes(search.toLowerCase())
      );
      return setFilteredPokemon(newPokemonList);
    }
    return setFilteredPokemon(pokemon);
  }, [search, pokemon])

  const columns = [
    {field: 'name', label: 'Nombre'},
    {field: 'image', label: 'Imagen'},
    {field: 'attack', label: 'Ataque'},
    {field: 'defense', label: 'Defensa'},
    {field: 'actions', label: 'Acciones'},
  ];

  const hanldleNewPokemon = () => {
    setOpenForm(true);
  }

  const handleCancel = () => {
    setOpenForm(false);
  }

  return (
    <main>
      <header>
        <h1>Listado de Pokemon</h1>
      </header>
      <section>
        <nav>
          <TextField placeholder="Busqueda" onChange={handleSearch}/>
          <Button onClick={hanldleNewPokemon}>Nuevo</Button>
        </nav>
        <div>
          <Table columns={columns}>
            <>
            {filteredPokemon.map((pokemon) => (
              <TableRow key={pokemon.id} pokemon={pokemon} onEdited={handleEditPokemon} onDelete={handleDeletePokemon} />
            ))}
            </>
          </Table>
        </div>
        {openForm && (
          <div>
            <CreatePokemon onCancel={handleCancel} onSubmit={handleCreatePokemon} />
          </div>
        )}
      </section>
    </main>
  )
}

export default PokemonList;
