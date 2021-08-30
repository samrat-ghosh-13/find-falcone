import { mount } from "@cypress/react"; // or @cypress/vue
import Header from "./header";

describe("Unit Testing of Header Component", () => {
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

  it("renders headers", () => {
    mount(<Header buttons={headerButtons} />);
    cy.get(".app__header").should("exist");
    cy.get(".app__header__contents").should("exist");
    cy.get(".app__header__contents__left").should("exist");
    cy.get(".app__header__contents__left__text").should("exist");
    cy.get(".app__header__contents__left__text").contains("Finding Falcone");
    cy.get(".app__header__contents__right").should("exist");
    cy.get(".app__header__contents__right__cta--Vehicles").should("exist");
    cy.get(".app__header__contents__right__cta--Planets").should("exist");
  });

  it("planet button takes the user to planet route", () => {
    mount(<Header buttons={headerButtons} />);
    cy.get(".app__header").should("exist");
    cy.get(".app__header__contents").should("exist");
    cy.get(".app__header__contents__left").should("exist");
    cy.get(".app__header__contents__left__text").should("exist");
    cy.get(".app__header__contents__left__text").contains("Finding Falcone");
    cy.get(".app__header__contents__right").should("exist");
    cy.get(".app__header__contents__right__cta--Vehicles").should("exist");
    cy.get(".app__header__contents__right__cta--Planets").should("exist");
  });
});
