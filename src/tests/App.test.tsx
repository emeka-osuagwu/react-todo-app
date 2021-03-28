import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import {
    render,
    screen,
    cleanup,
    waitFor,
    within,
} from "@testing-library/react";
import axiosMock from "axios";
import "@testing-library/jest-dom/extend-expect";

import App from "../App";

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

afterEach(cleanup);

test("renders without crashing", () => {
    render(<App />);
    const title = screen.getByText(/Todos/i);
    expect(title).toBeInTheDocument();
});

test("renders filter input component", () => {
    render(<App />);
    const value = screen.getByText(/Search/i);
    expect(value).toBeInTheDocument();
});

test("renders filter select component", () => {
    render(<App />);
    const value = screen.getByText(/Completed:/i);
    expect(value).toBeInTheDocument();
});

test("renders loading component", () => {
    render(<App />);
    const value = screen.getByText(/loading... please wait!/i);
    expect(value).toBeInTheDocument();
});
