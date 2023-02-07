import { render, screen } from "@testing-library/react";
import Table from './index';

const columns = [
  {field: 'name', label: 'Nombre'},
  {field: 'image', label: 'Imagen'},
  {field: 'attack', label: 'Ataque'},
  {field: 'defense', label: 'Defensa'},
  {field: 'actions', label: 'Acciones'},
];

describe('Table test', () => {
  it('should render table', () => {
    render(
      <Table columns={columns}>
        <tr>
          <td>Bulbasour</td>
          <td>image</td>
          <td>10</td>
          <td>50</td>
          <td>Edit</td>
        </tr>
      </Table>
    )
    const columnsElement = screen.getAllByRole('columnheader');
    expect(columnsElement).toHaveLength(5);
  })
})