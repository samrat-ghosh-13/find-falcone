// react
import React from "react";

// component
import Footer from "./footer";

// jest renderer
import renderer from "react-test-renderer";

// testing library react
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Test Footer component", () => {
  it("Case 1: Footer Component Renders Correctly (Snapshot)", () => {
    const headerComponentTree = renderer.create(<Footer />).toJSON();
    expect(headerComponentTree).toMatchSnapshot();
  });
  it("Case 2: Checks the Footer text is correct or not", () => {
    const { queryByTestId } = render(<Footer />);
    expect(
      queryByTestId("app__footer__contents", { exact: true }).innerHTML
    ).toBe(
      'Made with <span class="app__footer__contents__logo">❤️</span> by<a href="https://www.linkedin.com/in/samratat/" target="_blank" rel="noreferrer">Samrat Ghosh</a>© 2021'
    );
  });
});
