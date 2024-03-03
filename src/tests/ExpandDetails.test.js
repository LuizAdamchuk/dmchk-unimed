import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ExpandableDetails from "../Components/ExpandDetails";

describe("ExpandableDetails", () => {
  const mockData = [
    {
      "Item 1": [
        {
          "Detail 1": {
            value: 100,
            percent: 10,
          },
        },
      ],
    },
    {
      "Item 2": [
        {
          "Detail 2": {
            value: 200,
            percent: -10,
          },
        },
      ],
    },
  ];

  it("renders without crashing", () => {
    render(<ExpandableDetails data={mockData} />);
    expect(screen.getByText("Item 1- R$ Mi")).toBeInTheDocument();
    expect(screen.getByText("Item 2- R$ Mi")).toBeInTheDocument();
  });

  it("expands and collapses details on click", () => {
    render(<ExpandableDetails data={mockData} />);
    const item1 = screen.getByText("Item 1- R$ Mi");
    fireEvent.click(item1);

    const elements = screen.getAllByText("Detail 1", { exact: false });
    expect(elements).toHaveLength(2);
    fireEvent.click(item1);
    expect(screen.queryByText("Detail 1")).not.toBeInTheDocument();
  });
});
