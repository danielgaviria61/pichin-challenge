import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Button from '../Button';
import TextField from "../TextField";
import Slider from '../Slider';
import './styles.scss';

const CreatePokemon = (props) => {
  const { onSubmit, onCancel } = props;
  const [name, setName] = useState('');
  const [attack, setAttack] = useState(50);
  const [defense, setDefense] = useState(50);
  const [image, setImage] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = () => {
    const pokemon = {name, image, attack, defense};
    onSubmit(pokemon);
  }

  const handleCancel = () => {
    onCancel();
  }

  useEffect(() => {
    if(name !== '' && image !== '') {
      setDisabled(false);
    }
  }, [name, image, attack, defense]);

  return (
    <div className="create-pokemon-form">
      <h2>Nuevo Pokemon</h2>
      <form>
        <div className="text-fields-container">
          <div className="text-field">
            <label className="text-field-label">Nombre: </label>
            <TextField onChange={(value)=> setName(value)} placeholder="Pokemon" name="name"/>
          </div>
          <div className="text-field"> 
            <label className="text-field-label">Imagen: </label>
            <TextField onChange={(value)=> setImage(value)} placeholder="url" name="image"/>
          </div>
        </div>
        <div className="text-fields-container">
          <div className="text-field">
            <label className="text-field-label">Ataque: </label>
            <Slider onChange={(value)=> setAttack(value)} name="attack"/>
          </div>
          <div className="text-field">
            <label className="text-field-label">Defensa: </label>
            <Slider onChange={(value)=> setDefense(value)} name="defense"/>
          </div>
        </div>
        <footer className="actions-buttons">
          <Button onClick={handleSubmit} disabled={disabled}>Guardar</Button>
          <Button onClick={handleCancel}>Cancelar</Button>
        </footer>
      </form>
    </div>
  )
}

CreatePokemon.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
}

export default CreatePokemon;