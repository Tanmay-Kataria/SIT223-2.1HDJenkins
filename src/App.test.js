/* global test, expect */
/* eslint-disable no-unused-vars */
/* eslint-env jest */
import React from "react"; // If you are using the new JSX transform, you can remove this line.
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders DisplayName input", () => {
  render(<App />);
  // Check that the input with the placeholder is present
  const inputElement = screen.getByPlaceholderText(/Enter your name/i);
  expect(inputElement).toBeInTheDocument();
});
