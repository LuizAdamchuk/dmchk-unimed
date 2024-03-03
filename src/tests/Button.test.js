import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "../Components/Button";

describe("Button", () => {
  it("calls the onClick function passed as a prop", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} icon={true} />);
    const buttonElement = screen.getByRole("button");

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
