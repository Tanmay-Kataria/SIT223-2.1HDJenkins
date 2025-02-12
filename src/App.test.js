import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./App"; // Import Counter directly
import DisplayName from "./App"; // Import DisplayName directly

// Test for Counter Component
test("renders Counter component and increments/decrements correctly", () => {
  render(<Counter />);

  // Get buttons
  const incrementButton = screen.getByText(/increment/i);
  const decrementButton = screen.getByText(/decrement/i);

  // Click increment button and check value
  fireEvent.click(incrementButton);
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();

  // Click decrement button and check value
  fireEvent.click(decrementButton);
  expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
});

// Test for DisplayName Component
test("renders DisplayName component and updates input field", () => {
  render(<DisplayName />);

  // Get input and buttons
  const inputField = screen.getByPlaceholderText(/Enter your name/i);
  const submitButton = screen.getByText(/submit/i);
  const resetButton = screen.getByText(/reset/i);

  // Type a name into the input
  fireEvent.change(inputField, { target: { value: "Tanmay" } });
  expect(inputField.value).toBe("Tanmay");

  // Click submit button
  fireEvent.click(submitButton);
  expect(screen.getByText(/hello Tanmay/i)).toBeInTheDocument();

  // Click reset button
  fireEvent.click(resetButton);
  expect(inputField.value).toBe("");
});
