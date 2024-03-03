import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MenuButton from "../Components/MenuButton";

describe("MenuButton", () => {
  it("renders correctly", () => {
    render(<MenuButton />);
    expect(screen.getByText("Menu")).toBeInTheDocument();
  });

  it("toggles active state on click", () => {
    render(<MenuButton />);
    const button = screen.getByText("Menu");

    expect(button).not.toHaveClass("font-bold");

    fireEvent.click(button);

    expect(button).toHaveClass("font-bold");

    fireEvent.click(button);

    expect(button).not.toHaveClass("font-bold");
  });
});
