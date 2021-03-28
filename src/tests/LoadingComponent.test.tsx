import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import LoadingComponent from "../components/LoadingComponent";

test("renders without crashing", () => {
    render(<LoadingComponent />);
    const title = screen.getByText("loading... please wait!");
    expect(title).toBeInTheDocument();
});
