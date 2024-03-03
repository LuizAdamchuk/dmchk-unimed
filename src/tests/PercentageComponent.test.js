// PercentageComponent.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import PercentageComponent from "../Components/PercentageComponent";

describe("PercentageComponent", () => {
  test("renders correctly with positive value", () => {
    render(<PercentageComponent value={10} />);
    expect(screen.getByText("↑")).toBeInTheDocument();
  });

  test("renders correctly with negative value", () => {
    render(<PercentageComponent value={-10} />);
    expect(screen.getByText("↓")).toBeInTheDocument();
  });
});
