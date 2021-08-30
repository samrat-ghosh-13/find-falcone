// // component
// import Dropdown from "./dropdown";

// // jest renderer
// import renderer from "react-test-renderer";

// // testing library react
// import { render, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";

// describe("Test Dropdown component", () => {
//   const planets = [
//     { name: "Donlon", distance: 100, selected: false },
//     { name: "Enchai", distance: 200, selected: false },
//     { name: "Jebing", distance: 300, selected: false },
//     { name: "Sapir", distance: 400, selected: false },
//     { name: "Lerbin", distance: 500, selected: false },
//     { name: "Pingasor", distance: 600, selected: false },
//   ];

//   let selectedPlanet = {};

//   const onSelect = (type, value) => {
//     selectedPlanet = {
//       ...selectedPlanet,
//       [type]: value,
//     };
//   };

//   it("Case 1: Dropdown Component Renders Correctly (Snapshot)", () => {
//     const headerComponentTree = renderer
//       .create(
//         <Dropdown
//           classname="first"
//           options={planets}
//           selectedValue={selectedPlanet}
//           onSelect={onSelect}
//         />
//       )
//       .toJSON();
//     expect(headerComponentTree).toMatchSnapshot();
//   });
//   it("Case 2: Checks the placeholder text is correct or not", () => {
//     const { queryByPlaceholderText } = render(
//       <Dropdown
//         classname="first"
//         options={planets}
//         selectedValue={selectedPlanet}
//         onSelect={onSelect}
//       />
//     );
//     expect(
//       queryByPlaceholderText("Search planets", { exact: true })
//     ).toBeInTheDocument();
//   });
//   it("Case 3: Checks on click the dropdown opens or not", async () => {
//     const { getByTestId } = render(
//       <Dropdown
//         classname="first"
//         options={planets}
//         selectedValue={selectedPlanet}
//         onSelect={onSelect}
//       />
//     );
//     await fireEvent.click(getByTestId("searchableDropdown-first"));
//     expect(
//       getByTestId("searchableDropdown-input-first-options", { exact: true })
//     ).toBeInTheDocument();
//   });
//   it("Case 4: Checks on click the dropdown input opens the dropdown or not", async () => {
//     const { getByTestId } = render(
//       <Dropdown
//         classname="first"
//         options={planets}
//         selectedValue={selectedPlanet}
//         onSelect={onSelect}
//       />
//     );
//     await fireEvent.click(getByTestId("searchableDropdown-input-first"));
//     expect(
//       getByTestId("searchableDropdown-input-first-options", { exact: true })
//     ).toBeInTheDocument();
//   });
//   it("Case 5: Checks on click the dropdown input opens and renders the correct options or not", async () => {
//     const { getByTestId, getByText } = render(
//       <Dropdown
//         classname="first"
//         options={planets}
//         selectedValue={selectedPlanet}
//         onSelect={onSelect}
//       />
//     );
//     await fireEvent.click(getByTestId("searchableDropdown-input-first"));
//     expect(
//       getByTestId("searchableDropdown-input-first-options", { exact: true })
//     ).toBeInTheDocument();
//     expect(getByText("Donlon")).toBeInTheDocument();
//     expect(getByText("Enchai")).toBeInTheDocument();
//     expect(getByText("Jebing")).toBeInTheDocument();
//     expect(getByText("Sapir")).toBeInTheDocument();
//     expect(getByText("Lerbin")).toBeInTheDocument();
//     expect(getByText("Pingasor")).toBeInTheDocument();
//   });
//   it("Case 6: Checks on click the dropdown input options callback updates the state to the parent correctly or not", async () => {
//     const { getByTestId, getByText } = render(
//       <Dropdown
//         classname="first"
//         options={planets}
//         selectedValue={selectedPlanet}
//         onSelect={onSelect}
//       />
//     );
//     await fireEvent.click(getByTestId("searchableDropdown-input-first"));
//     expect(
//       getByTestId("searchableDropdown-input-first-options", { exact: true })
//     ).toBeInTheDocument();
//     expect(getByText("Donlon")).toBeInTheDocument();
//     expect(getByText("Enchai")).toBeInTheDocument();
//     expect(getByText("Jebing")).toBeInTheDocument();
//     expect(getByText("Sapir")).toBeInTheDocument();
//     expect(getByText("Lerbin")).toBeInTheDocument();
//     expect(getByText("Pingasor")).toBeInTheDocument();
//     await fireEvent.click(getByText("Donlon"));
//     expect(selectedPlanet).toStrictEqual({
//       first: {
//         name: "Donlon",
//         distance: 100,
//         selected: false,
//       },
//     });
//   });
// });
