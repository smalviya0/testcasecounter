
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../Components/Counter";

describe("Counter", () => {
  test("renders Counter App", () => {
    const { getByText } = render(<Counter />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const titleElement = getByText(/Counter App/i);
    expect(titleElement).toBeInTheDocument();
  });

    test("displays the  button-title", () => {
    const { getByTestId } = render(<Counter />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const countElement = getByTestId("count");
    expect(countElement.textContent).toBe("Increment");
  });

  test("displays the initial count value of 0", () => {
    const { getByTestId } = render(<Counter />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const countElement = getByTestId("count-text");
    expect(countElement.textContent).toBe("Count: 0");
  });

  test("increments the count value when the Increment button is clicked", () => {
    const { getByText, getByTestId } = render(<Counter />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const incrementButton = getByText(/Increment/i);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const countElement = getByTestId("count-text");

    fireEvent.click(incrementButton);
    expect(countElement.textContent).toBe("Count: 1");

    fireEvent.click(incrementButton);
    expect(countElement.textContent).toBe("Count: 2");
  });

  test("decrements the count value when the Decrement button is clicked", () => {
    const { getByText, getByTestId } = render(<Counter />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const decrementButton = getByText(/Decrement/i);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const countElement = getByTestId("count-text");

    fireEvent.click(decrementButton);
    // console.log("countElement",  decrementButton, countElement)
    expect(countElement.textContent).toBe("Count: -1");

    fireEvent.click(decrementButton);
    expect(countElement.textContent).toBe("Count: -2");
  });
});
