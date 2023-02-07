import React, { useState } from "react";
import PropTypes from 'prop-types'
import './styles.scss';

const Slider = (props) => {
  const { onChange, name, max} = props;
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    const currentValue = e?.target?.value;
    setValue(currentValue);
    onChange(currentValue);
  }

  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / max}% 100%` };
  };

  return (
    <div className="slider">
      <label>0</label>
      <input 
        onChange={handleChange}
        type="range"
        min="0"
        max={max}
        name={name}
        aria-label={name}
        style={getBackgroundSize()}
        value={value}
      />
      <label>{max}</label>
    </div>
    
  )
}

Slider.propTypes = {
  onChange: PropTypes.func,
  max: PropTypes.number.isRequired,
  name: PropTypes.string
}

Slider.defaultProps = {
  max: 100,
}

export default Slider;