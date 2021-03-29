import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import "@testing-library/jest-dom/extend-expect";

import FilterComponent from "../components/FilterComponent";

test("renders without crashing", () => {
    render(<FilterComponent />);
    const title = screen.getByText("Search:");
    expect(title).toBeInTheDocument();
});

test("renders same mock up", () => {
    const tree = renderer.create(<FilterComponent />).toJSON();
    expect(tree).toMatchSnapshot();
});
