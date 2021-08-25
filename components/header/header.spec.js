// react
import React from "react";

// next
import router from "next/router";

// component
import Header from "./header";

// jest renderer
import renderer from "react-test-renderer";

// testing library react
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

jest.mock("next/router", () => require("next-router-mock"));

describe("Test Header component", () => {
  it("Case 1: Header Component Renders Correctly (Snapshot)", () => {
    const headerComponentTree = renderer.create(<Header />).toJSON();
    expect(headerComponentTree).toMatchSnapshot();
  });
  it("Case 2: Checks the header brand is correct or not", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Finding Falcone", { exact: true })).toBeInTheDocument();
  });
  it("Case 3: Checks the planets button click redirects to the correct route or not", () => {
    const { getByText } = render(<Header />);
    fireEvent.click(getByText("Planets"));
    expect(router).toMatchObject({
      asPath: "/planets",
      pathname: "/planets",
      query: {},
    });
  });
  it("Case 4: Checks the vehicles button click redirects to the correct route or not", () => {
    const { getByText } = render(<Header />);
    fireEvent.click(getByText("Vehicles"));
    expect(router).toMatchObject({
      asPath: "/vehicles",
      pathname: "/vehicles",
      query: {},
    });
  });
  it("Case 5: Checks the Header Component has the planets and vehicles button", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Planets", { exact: true })).toBeInTheDocument();
    expect(getByText("Vehicles", { exact: true })).toBeInTheDocument();
  });
});
