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
  const headerButtons = [
    {
      name: "Planets",
      path: "/planets",
    },
    {
      name: "Vehicles",
      path: "/vehicles",
    },
  ];
  it("Case 1: Header Component Renders Correctly (Snapshot)", () => {
    const headerComponentTree = renderer
      .create(<Header buttons={headerButtons} />)
      .toJSON();
    expect(headerComponentTree).toMatchSnapshot();
  });
  it("Case 2: Checks the header brand is correct or not", () => {
    const { getByText } = render(<Header buttons={headerButtons} />);
    expect(getByText("Finding Falcone", { exact: true })).toBeInTheDocument();
  });
  it("Case 3: Checks the planets button on Header Component click redirects to the correct route or not", async () => {
    const { getByText } = render(<Header buttons={headerButtons} />);
    await fireEvent.click(getByText("Planets"));
    expect(router).toMatchObject({
      asPath: "/planets",
      pathname: "/planets",
      query: {},
    });
  });
  it("Case 4: Checks the vehicles button on Header Component click redirects to the correct route or not", async () => {
    const { getByText } = render(<Header buttons={headerButtons} />);
    await fireEvent.click(getByText("Vehicles"));
    expect(router).toMatchObject({
      asPath: "/vehicles",
      pathname: "/vehicles",
      query: {},
    });
  });
  it("Case 5: Checks the Header Component has the planets and vehicles button", () => {
    const { getByText } = render(<Header buttons={headerButtons} />);
    expect(getByText("Planets", { exact: true })).toBeInTheDocument();
    expect(getByText("Vehicles", { exact: true })).toBeInTheDocument();
  });
});
