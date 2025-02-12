/**
 * @jest-environment jsdom
 */

import React from "react"; // ✅ Add this line
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./App"; 
import DisplayName from "./App";

// Test for Counter Component
test("renders Counter component and increments/decrements correctly", () => {
  render(<Counter />); // ✅ Ensure React is imported so JSX works

  const incrementButton = screen.getByText(/increment/i);
  const decrementButton = screen.getByText(/decrement/i);

  fireEvent.click(incrementButton);
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();

  fireEvent.click(decrementButton);
  expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
});

// Test for DisplayName Component
test("renders DisplayName component and updates input field", () => {
  render(<DisplayName />);

  const inputField = screen.getByPlaceholderText(/Enter your name/i);
  const submitButton = screen.getByText(/submit/i);
  const resetButton = screen.getByText(/reset/i);

  fireEvent.change(inputField, { target: { value: "Tanmay" } });
  expect(inputField.value).toBe("Tanmay");

  fireEvent.click(submitButton);
  expect(screen.getByText(/hello Tanmay/i)).toBeInTheDocument();

  fireEvent.click(resetButton);
  expect(inputField.value).toBe("");
});
