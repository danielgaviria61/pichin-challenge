import React, { useState } from "react";
import PropTypes from 'prop-types';
import './styles.scss';

const TextField = (props) => {
  const {onChange, disabled, type, placeholder, name, initValue} = props;
  const [inputValue, setInputValue] = useState(initValue || '');

  const handleChange = (e) => {
    const currentValue = e?.target?.value;
    setInputValue(currentValue);
    onChange(currentValue);
  }
  return (
    <input
      className={"textfield"}
      onChange={handleChange}
      disabled={disabled}
      type={type}
      placeholder={placeholder}
      name={name}
      value={inputValue}
    />
  )
}

TextField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  initValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

TextField.defaultProps = {
  type: 'text',
  placeholder: '',
}

export default TextField;