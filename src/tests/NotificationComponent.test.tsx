import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import NotificationComponent from "../components/NotificationComponent";

test("renders without crashing", () => {
    render(<NotificationComponent />);
    const title = screen.getByText(
        "No result for the given search parameters!"
    );
    expect(title).toBeInTheDocument();
});
