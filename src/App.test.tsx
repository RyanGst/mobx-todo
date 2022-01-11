import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { RootStateProvider } from "./RootStateContext";

test("renders learn react link", () => {
  render(
    <RootStateProvider>
      <App />
    </RootStateProvider>
  );
  const linkElement = screen.getByText(/Adicionar tarefa/i);
  expect(linkElement).toBeInTheDocument();
});
