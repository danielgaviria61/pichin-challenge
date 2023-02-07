import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

const Table = (props) => {
  const { columns, children } = props;

  return (
    <table>
      <thead>
        <tr>
        {columns.map((column) => (
          <th key={column.field}>{column.label}</th>
        ))}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    field: PropTypes.string.isRequired,
  })).isRequired,
  children: PropTypes.element.isRequired,
}

export default Table;