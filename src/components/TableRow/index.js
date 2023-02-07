import React, { useState } from "react";
import PropTypes from 'prop-types';
import Button from '../Button';
import TextField from "../TextField";
import './styles.scss';

const TableRow = (props) => {
  const { onDelete, onEdited, pokemon } = props;
  const [ edit, setEdit ] = useState(false);
  const [ value, setValue ] = useState(pokemon);
  const [ editedValue, setEditedValue ] = useState(pokemon);

  const handleEnableEdit = () => {
    setEdit(true);
  }

  const handleDisableEdit = () => {
    setEdit(false);
  }

  const handleEdit = async () => {
    try {
      await onEdited(editedValue);
      setEdit(false);
      setValue(editedValue);
    } catch {
      setEdit(false);
      alert('No se pudo guardar');
    }
  }

  const handleDelete = () => {
    onDelete(value);
  }

  const handleChange = (key) => (value) => {
    const newPokemonData = {...editedValue, [key]: value};
    setEditedValue(newPokemonData);
  }

  return (
    <tr className="table-row">
      <td>
        {!edit ? value.name : (
          <TextField name={`${pokemon.id}name`} initValue={value.name} onChange={handleChange('name')}/>
        )}
      </td>
      <td>
        <img src={pokemon.image} alt={value.name}/>
      </td>
      <td>
        {!edit ? value.attack : (
          <TextField
            className="number-field"
            name={`${pokemon.id}attack`}
            type="number"
            initValue={value.attack}
            onChange={handleChange('attack')}
          />
        )}
      </td>
      <td>
        {!edit ? value.defense : (
          <TextField
            className="number-field"
            name={`${pokemon.id}defense`}
            type="number"
            initValue={value.defense}
            onChange={handleChange('defense')}
          />
        )}
      </td>
      <td>
        {!edit ? (
          <div>
            <Button onClick={handleEnableEdit} secundary>Edit</Button>
            <Button onClick={handleDelete} secundary>Delete</Button>
          </div>
          ) : (
          <div>
            <Button onClick={handleEdit}>Save</Button>
            <Button onClick={handleDisableEdit}>Cancel</Button>
          </div>
        )}
      </td>
    </tr>
  )
}

TableRow.propTypes = {
  onDelete: PropTypes.func,
  onEdited: PropTypes.func,
  pokemon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    image: PropTypes.string,
    attack: PropTypes.number,
    defense: PropTypes.number
  })
}

export default TableRow;