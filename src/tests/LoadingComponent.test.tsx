import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import LoadingComponent from "../components/LoadingComponent";

test("renders without crashing", () => {
    const { getByText } = render(<LoadingComponent />);
    const title = getByText("loading... please wait!");
    expect(title).toBeInTheDocument();
});

test("renders same mock up", () => {
    const tree = renderer.create(<LoadingComponent />).toJSON();
    expect(tree).toMatchSnapshot();
});
