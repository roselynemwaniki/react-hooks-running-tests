// src/__tests__/Article.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  // This line prints the current DOM to the console to help debug if needed
  screen.debug();

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});

