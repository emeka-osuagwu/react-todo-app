import React from "react";
import renderer from "react-test-renderer";
import { render, within } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import todos from "./demo_data";
import Todo from "../components/Todo";

const props = { todos };

test("renders without crashing", () => {
    const { getByText } = render(<Todo />);

    const title_1 = getByText("#");
    expect(title_1).toBeInTheDocument();

    const title_2 = getByText("Title");
    expect(title_2).toBeInTheDocument();

    const title_3 = getByText("Completed");
    expect(title_2).toBeInTheDocument();
});

test("renders item when props passed", () => {
    const { getByText } = render(<Todo {...props} />);

    getByText(todos[0].title);
    getByText(todos[1].title);
});

test("renders list when props passed", () => {
    const { getAllByRole } = render(<Todo {...props} />);
    const [row1, row2, row3] = getAllByRole("row");

    within(row2).getByText(todos[0].title);
    within(row3).getByText(todos[1].title);
});

test("renders right size of props passed", () => {
    const { getAllByRole } = render(<Todo {...props} />);
    expect(getAllByRole("row").length).toBe(todos.length + 1);
});
