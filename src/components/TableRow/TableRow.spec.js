import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import TableRow from './index';

const pokemon = {
  name: 'bulbasaur',
  id: '1',
  attack: 10,
  defense: 50,
  image: 'imageurl.com/image.jpg',
}

describe('TableRow test', () => {
  const onEditFunction = jest.fn();
  const onDeleteFunction = jest.fn();

  it('should delete table row', () => {
    render(
      <TableRow onEdited={onEditFunction} onDelete={onDeleteFunction} pokemon={pokemon}/>
    )
    const deleteButton = screen.getAllByRole('button')[1];
    fireEvent.click(deleteButton);
    expect(onDeleteFunction.mock.calls).toHaveLength(1);
  })

  it('should enable edit table row', async () => {
    render(
      <TableRow onEdited={onEditFunction} onDelete={onDeleteFunction} pokemon={pokemon}/>
    )
    const editButton = screen.getAllByRole('button')[0];
    fireEvent.click(editButton);
    const inputs = screen.getAllByRole('textbox');
    const numberInput = screen.getAllByRole('spinbutton')
    expect(numberInput).toHaveLength(2);
    expect(inputs).toHaveLength(1);

    const saveButton = screen.getAllByRole('button')[0];
    fireEvent.click(saveButton);
    await waitFor(() => {
      expect(onEditFunction.mock.calls).toHaveLength(1);      
    })
  })
})