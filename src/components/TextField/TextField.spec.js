import { fireEvent, render, screen } from "@testing-library/react";
import TextField from './index';


describe('TextField test', () => {
  it('should run onChange function', () => {
    const onChangeFunction = jest.fn();
    render(
      <TextField onChange={onChangeFunction} name="test" placeholder="test"/>
    )
    const input = screen.getByPlaceholderText('test');
    fireEvent.change(input, {target: {value: 'a'}});
    expect(onChangeFunction.mock.calls).toHaveLength(1);
  })
  it('should be disabled', () => {
    const onChangeFunction = jest.fn();
    render(
      <TextField onChange={onChangeFunction} name="test" placeholder="test" disabled/>
    )
    const input = screen.getByPlaceholderText('test');
    expect(input).toBeDisabled();
  })
})