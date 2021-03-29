import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import NotificationComponent from "../components/NotificationComponent";

test("renders without crashing", () => {
    const { getByText } = render(<NotificationComponent />);
    const title = getByText("No result for the given search parameters!");
    expect(title).toBeInTheDocument();
});

test("renders same mock up", () => {
    const tree = renderer.create(<NotificationComponent />).toJSON();
    expect(tree).toMatchSnapshot();
});
