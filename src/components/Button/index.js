import React from "react";
import PropTypes from 'prop-types';

import './styles.scss';

const Button = (props) => {
  const {children, onClick, disabled, secundary} = props;

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onClick();
  }
  return (
    <button onClick={handleClick} disabled={disabled} className={secundary ? 'secundary' : 'primary'}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  secundary: PropTypes.bool
}

export default Button;