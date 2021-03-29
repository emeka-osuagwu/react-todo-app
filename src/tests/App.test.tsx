import React from "react";
import { rest } from "msw";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { setupServer } from "msw/node";
import configureMockStore from "redux-mock-store";
import { render, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import App from "../App";
import todos from "./demo_data";
import * as TYPES from "../store/types";
import FilterComponent from "../components/FilterComponent";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

test("handles server", async () => {
    fetchMock.getOnce("/todos", {
        body: { todos },
        headers: { "content-type": "application/json" },
    });

    const expectedActions = {
        type: TYPES.SET_TODOS,
        payload: todos,
    };

    const store = mockStore({ todos: [] });
    expect(expectedActions).toEqual(expectedActions);
});
