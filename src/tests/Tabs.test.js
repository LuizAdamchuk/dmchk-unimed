import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tabs from "../Components/Tabs";

describe("Tabs", () => {
  test("renders both tabs and changes active tab on click", () => {
    render(<Tabs />);

    const indicadoresEstrategicosButton = screen.getByText(
      "Indicadores Estratégicos"
    );
    const financeiroButton = screen.getByText("Financeiro");

    expect(indicadoresEstrategicosButton).toHaveClass(
      "border-b-2 border-yellow-300 font-bold"
    );
    expect(financeiroButton).not.toHaveClass(
      "border-b-2 border-yellow-300 font-bold"
    );

    fireEvent.click(financeiroButton);
    expect(financeiroButton).toHaveClass(
      "border-b-2 border-yellow-300 font-bold"
    );
    expect(indicadoresEstrategicosButton).not.toHaveClass(
      "border-b-2 border-yellow-300 font-bold"
    );
  });
});
