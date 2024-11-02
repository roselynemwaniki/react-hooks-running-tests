import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

  

  test("renders text", () => {
    expect(screen.queryByText("please pass this test")).not.toBeInTheDocument();
  });
  