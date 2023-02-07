import { fireEvent, render, screen } from "@testing-library/react";
import Slider from './index';


describe('Slider test', () => {
  it('should run onChange function', () => {
    const onChangeFunction = jest.fn();
    render(
      <Slider onChange={onChangeFunction} name="test" max={100}/>
    )
    const input = screen.getByLabelText('test');
    fireEvent.change(input, {target: {value: 10}});
    expect(onChangeFunction.mock.calls).toHaveLength(1);
  })
})