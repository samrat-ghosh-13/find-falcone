/// <reference types="cypress" />

// Testing all the End Points work properly or not
context("Vehicles Integration Testing", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    describe("Vehicles Integration Tests", () => {
      it("Allows the user to check the vehicles", () => {
        // Waiting for the useEffect to load the data (Planets, Vehicles)
        cy.wait(2000);
  
        // Closting the toasts
        cy.get(".Toastify__close-button").click({ multiple: true });
  
        // Redirecting to the planets url
        cy.get(".app__header__contents__right__cta--Vehicles").click();
  
        // Validating the path
        cy.url().should("include", "/vehicles");
  
        // Validating the planets
        cy.get(".app__vehicles__card__name").contains("Space pod");
        cy.get(".app__vehicles__card__no").contains("2");
        cy.get(".app__vehicles__card__speed").contains("2");
        cy.get(".app__vehicles__card__distance").contains("200");

        cy.get(".app__vehicles__card__name").contains("Space rocket");
        cy.get(".app__vehicles__card__no").contains("1");
        cy.get(".app__vehicles__card__speed").contains("4");
        cy.get(".app__vehicles__card__distance").contains("300");

        cy.get(".app__vehicles__card__name").contains("Space shuttle");
        cy.get(".app__vehicles__card__no").contains("1");
        cy.get(".app__vehicles__card__speed").contains("5");
        cy.get(".app__vehicles__card__distance").contains("400");

        cy.get(".app__vehicles__card__name").contains("Space ship");
        cy.get(".app__vehicles__card__no").contains("2");
        cy.get(".app__vehicles__card__speed").contains("10");
        cy.get(".app__vehicles__card__distance").contains("600");
      });
    });
  });
  