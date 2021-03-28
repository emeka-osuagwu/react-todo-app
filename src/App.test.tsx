import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

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
