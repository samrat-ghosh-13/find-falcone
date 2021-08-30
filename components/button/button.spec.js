import { mount } from "@cypress/react"; // or @cypress/vue
import Button from "./button";

describe("Unit Testing of Button Component", () => {
  it("renders button", () => {
    mount(<Button classname="unit__testing">Testing</Button>);
    cy.get(".button").should("exist");
    cy.get(".button__text").should("exist");
    cy.get(".button__text").contains("Testing");
  });

  it("renders disabled button", () => {
    mount(
      <Button classname="unit__testing" disabled={true}>
        Testing
      </Button>
    );
    cy.get(".button").should("exist");
    cy.get(".button--disabled").should("exist");
    cy.get(".button__text").should("exist");
  });

  it("renders data-testid button", () => {
    mount(
      <Button classname="unit__testing" disabled={true}>
        Testing
      </Button>
    );
    cy.get(".button").should("exist");
    cy.get('[data-testid="button"]').should("exist");
    cy.get(".button__text").should("exist");
  });

  it("renders button clicks", () => {
    mount(
      <Button classname="unit__testing" disabled={true}>
        Testing
      </Button>
    );
    cy.get(".button").should("exist");
    cy.get(".button__text").should("exist");
    cy.get(".button__text").click();
  });

  it("renders button classname", () => {
    mount(
      <Button classname="unit__testing" disabled={true}>
        Testing
      </Button>
    );
    cy.get(".button").should("exist");
    cy.get(".unit__testing").should("exist");
    cy.get(".unit__testing").contains("Testing");
  });
});
