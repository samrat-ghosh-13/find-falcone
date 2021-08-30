import { mount } from "@cypress/react"; // or @cypress/vue
import Dropdown from "./dropdown";

describe("Unit Testing of Dropdown Component", () => {
  const planets = [
    { name: "Donlon", distance: 100, selected: false },
    { name: "Enchai", distance: 200, selected: false },
    { name: "Jebing", distance: 300, selected: false },
    { name: "Sapir", distance: 400, selected: false },
    { name: "Lerbin", distance: 500, selected: false },
    { name: "Pingasor", distance: 600, selected: false },
  ];

  let selectedPlanets = {};

  const onSelect = (type, value) => {
    selectedPlanets = {
      ...selectedPlanets,
      [type]: value,
    };
  };

  it("renders dropdown", () => {
    mount(
      <Dropdown
        classname="first"
        options={planets}
        selectedValue={selectedPlanets.first}
        onSelect={onSelect}
      />
    );
    cy.get(".dropdown").should("exist");
    cy.get(".dropdown.first").should("exist");
    cy.get(".dropdown__container").should("exist");
    cy.get(".dropdown__container__input").should("exist");
    cy.get(".dropdown__container__input").click();
    cy.get(".dropdown__options__container").should("exist");
  });

  it("on click of the option the option is selected in the dropdown", () => {
    mount(
      <Dropdown
        classname="first"
        options={planets}
        selectedValue={selectedPlanets.first}
        onSelect={onSelect}
      />
    );
    cy.get(".dropdown").should("exist");
    cy.get(".dropdown.first").should("exist");
    cy.get(".dropdown__container").should("exist");
    cy.get(".dropdown__container__input").should("exist");
    cy.get(".dropdown__container__input").click();
    cy.get(".dropdown__options__container").should("exist");
    cy.get(
      '[data-testid="searchableDropdown-input-first-options-option-5-div-text"]'
    ).click();
    cy.get("#searchableDropdown-input-first").should("have.value", "Pingasor");
  });

  it("on input of characters unique option is selected in the dropdown", () => {
    mount(
      <Dropdown
        classname="first"
        options={planets}
        selectedValue={selectedPlanets.first}
        onSelect={onSelect}
      />
    );
    cy.get(".dropdown").should("exist");
    cy.get(".dropdown.first").should("exist");
    cy.get(".dropdown__container").should("exist");
    cy.get(".dropdown__container__input").should("exist");
    cy.get(".dropdown__container__input").click();
    cy.get(".dropdown__container__input").click();
    cy.get(".dropdown__container__input").click();
    cy.get(".dropdown__options__container").should("exist");
    cy.get("#searchableDropdown-input-first")
      .invoke("val", "Pingasor")
      .should("have.value", "Pingasor");
  });
});
