// react
import React, { useState } from "react";

// component
import Button from "./button";

// jest renderer
import renderer from "react-test-renderer";

// testing library react
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

/**
 * @name ButtonWrapper
 * @details use case of button component
 * @returns button component with the updated count
 */
const ButtonWrapper = () => {
  const [count, setCounter] = useState(0);

  const handleButtonClick = () => {
    setCounter(count + 1);
  };

  return (
    <Button handleClick={handleButtonClick}>Click to increase: {count}</Button>
  );
};

describe("Test Button component", () => {
  // Case 1: Button Renders properly or not using snapshot testing
  it("Case 1: Button Component Renders Correctly", () => {
    const handleButtonClick = () => {
      console.log("Button Clicked");
    };

    const buttonComponentTree = renderer
      .create(
        <ButtonWrapper handleClick={handleButtonClick}>Test</ButtonWrapper>
      )
      .toJSON();
    expect(buttonComponentTree).toMatchSnapshot();
  });

  // Case 2: Checks the Button data-testid is correct or not
  it("Case 2: Checks the Button data-testId is correct or not", () => {
    const handleButtonClick = () => {
      console.log("Button Clicked");
    };
    const { getByTestId } = render(
      <ButtonWrapper handleClick={handleButtonClick}>Test</ButtonWrapper>
    );
    expect(getByTestId("button")).toBeInTheDocument();
  });

  // Case 3: Checks the number of times button is clicked
  it("Case 3: Checks the number of times button is clicked", () => {
    const { getByTestId, getByText } = render(<ButtonWrapper />);
    fireEvent.click(getByTestId("button"));
    fireEvent.click(getByTestId("button"));
    expect(
      getByText("Click to increase: 2", { exact: true })
    ).toBeInTheDocument();
  });

  // Case 4: Checks the Button Component Name is correct or Not
  it("Case 4: Checks the Button Component Children is correct or Not", () => {
    const { getByText } = render(<ButtonWrapper />);
    expect(
      getByText("Click to increase: 0", { exact: true })
    ).toBeInTheDocument();
  });
});