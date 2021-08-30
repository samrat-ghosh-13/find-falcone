/// <reference types="cypress" />

// Testing all the End Points work properly or not
context("Planets Integration Testing", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Planets Integration Tests", () => {
    it("Allows the user to check the planets", () => {
      // Waiting for the useEffect to load the data (Planets, Vehicles)
      cy.wait(2000);

      // Closting the toasts
      cy.get(".Toastify__close-button").click({ multiple: true });

      // Redirecting to the planets url
      cy.get(".app__header__contents__right__cta--Planets").click();

      // Validating the path
      cy.url().should("include", "/planets");

      // Validating the planets
      cy.get(".app__planets__card__name").contains("Donlon");
      cy.get(".app__planets__card__distance").contains("100");

      cy.get(".app__planets__card__name").contains("Enchai");
      cy.get(".app__planets__card__distance").contains("200");

      cy.get(".app__planets__card__name").contains("Jebing");
      cy.get(".app__planets__card__distance").contains("300");

      cy.get(".app__planets__card__name").contains("Sapir");
      cy.get(".app__planets__card__distance").contains("400");

      cy.get(".app__planets__card__name").contains("Lerbin");
      cy.get(".app__planets__card__distance").contains("500");
      
      cy.get(".app__planets__card__name").contains("Pingasor");
      cy.get(".app__planets__card__distance").contains("600");
    });
  });
});
