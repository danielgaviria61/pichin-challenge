import { fireEvent, render, screen } from "@testing-library/react";
import Button from './index';


describe('Button test', () => {
  it('should run onClick function', () => {
    const onClickFunction = jest.fn();
    render(
      <Button onClick={onClickFunction}>
        Example
      </Button>
    )
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClickFunction.mock.calls).toHaveLength(1);
  })
  it('should be disabled', () => {
    const onClickFunction = jest.fn();
    render(
      <Button onClick={onClickFunction} disabled>
        Example
      </Button>
    )
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClickFunction.mock.calls).toHaveLength(0);
  })
})