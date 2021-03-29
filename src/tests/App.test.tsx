import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, cleanup, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import App from "../App";
import FilterComponent from "../components/FilterComponent";

const data = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
    },
];

const server = setupServer(
    rest.get("/todos", (req, res, ctx) => {
        return res(ctx.json(data));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders without crashing", () => {
    const { getByText } = render(<App />);
    const title = getByText(/Todos/i);
    expect(title).toBeInTheDocument();
});

test("renders loading component", () => {
    const { getByText } = render(<App />);
    const value = getByText(/loading... please wait!/i);
    expect(value).toBeInTheDocument();
});

test("renders loading component", () => {
    const { getByPlaceholderText } = render(<FilterComponent />);
    const input = getByPlaceholderText("keyword...");
    fireEvent.change(input, { target: { value: "new text" } });

    expect(input.value).toBe("new text");
});

// test("handles server error", async () => {
//     server.use(
//         rest.get("/greeting", (req, res, ctx) => {
//             return res(ctx.status(500));
//         })
//     );

//     render(<App />);
//     const value = screen.getByText(
//         /No result for the given search parameters/i
//     );
//     expect(value).toBeInTheDocument();
// });
