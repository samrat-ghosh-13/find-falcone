/// <reference types="cypress" />

// Testing all the End Points work properly or not
context("Falcone Integration Testing", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Falcone Integration Tests", () => {
    it("Allows the user to select the planets and vehicles", () => {
      // Waiting for the useEffect to load the data (Planets, Vehicles)
      cy.wait(2000);

      // Selecting the first Planet and Vehicles
      cy.get("#searchableDropdown-first").click();
      cy.get("#searchableDropdown-first")
        .find(".dropdown__options")
        .should("have.length", 6);
      cy.get(
        '[data-testid="searchableDropdown-input-first-options-option-0"]'
      ).click();
      cy.get(".app__falcone__contents__card__dropdown__c__radio").should(
        "have.length",
        4
      );
      cy.get('[data-testid="radio-input-first-0"]').click();
      cy.get(".app__falcone__contents__card--first")
        .find(".app__falcone__contents__card__distance")
        .contains("Distance of the planet: 100");

      // Selecting the second Planet and Vehicles
      // Selected planet from first dropdown should be disabled
      cy.get("#searchableDropdown-second").click();
      cy.get("#searchableDropdown-second")
        .find(".dropdown__options")
        .should("have.length", 6);
      cy.get(
        '[data-testid="searchableDropdown-input-second-options-option-0"]'
      ).should("have.class", "dropdown__options--disabled");
      cy.get(
        '[data-testid="searchableDropdown-input-second-options-option-1"]'
      ).click();
      cy.get(".app__falcone__contents__card__dropdown__c__radio").should(
        "have.length",
        8
      );
      cy.get('[data-testid="radio-input-second-1"]').click();
      cy.get(".app__falcone__contents__card--second")
        .find(".app__falcone__contents__card__distance")
        .contains("Distance of the planet: 200");

      // Selecting the third Planet and Vehicles
      // Selected planet from first and second dropdown should be disabled
      // Selected vehicles should be disabled if the options are already selected
      cy.get("#searchableDropdown-third").click();
      cy.get("#searchableDropdown-third")
        .find(".dropdown__options")
        .should("have.length", 6);
      cy.get(
        '[data-testid="searchableDropdown-input-third-options-option-0"]'
      ).should("have.class", "dropdown__options--disabled");
      cy.get(
        '[data-testid="searchableDropdown-input-third-options-option-1"]'
      ).should("have.class", "dropdown__options--disabled");
      cy.get(
        '[data-testid="searchableDropdown-input-third-options-option-2"]'
      ).click();
      cy.get(".app__falcone__contents__card__dropdown__c__radio").should(
        "have.length",
        12
      );
      cy.get('[data-testid="radio-input-third-0"]').should("be.disabled");
      cy.get('[data-testid="radio-input-third-1"]').should("be.disabled");
      cy.get('[data-testid="radio-input-third-2"]').click();
      cy.get(".app__falcone__contents__card--third")
        .find(".app__falcone__contents__card__distance")
        .contains("Distance of the planet: 300");

      // Selecting the fourth Planet and Vehicles
      // Selected planet from first and second dropdown should be disabled
      // Selected vehicles should be disabled if the options are already selected
      cy.get("#searchableDropdown-fourth").click();
      cy.get("#searchableDropdown-fourth")
        .find(".dropdown__options")
        .should("have.length", 6);
      cy.get(
        '[data-testid="searchableDropdown-input-fourth-options-option-0"]'
      ).should("have.class", "dropdown__options--disabled");
      cy.get(
        '[data-testid="searchableDropdown-input-fourth-options-option-1"]'
      ).should("have.class", "dropdown__options--disabled");
      cy.get(
        '[data-testid="searchableDropdown-input-fourth-options-option-2"]'
      ).should("have.class", "dropdown__options--disabled");
      cy.get(
        '[data-testid="searchableDropdown-input-fourth-options-option-3"]'
      ).click();
      cy.get(".app__falcone__contents__card__dropdown__c__radio").should(
        "have.length",
        16
      );
      cy.get('[data-testid="radio-input-fourth-0"]').should("be.disabled");
      cy.get('[data-testid="radio-input-fourth-1"]').should("be.disabled");
      cy.get('[data-testid="radio-input-fourth-2"]').should("be.disabled");
      cy.get('[data-testid="radio-input-fourth-3"]').click();
      cy.get(".app__falcone__contents__card--fourth")
        .find(".app__falcone__contents__card__distance")
        .contains("Distance of the planet: 400");

      // Check the total time taken
      cy.get(".app__falcone__header__contents").contains(
        "Total time to reach all the planets : 200"
      );

      // Click on Find Falcone Button
      cy.get(".app__falcone__header__button__find").click();

      if (cy.url().should("include", "/result")) {
        cy.get(".app__result__header__contents").contains(
          "Success! Congratulations on finding falcone, King Shah is mighty pleased!"
        );
        cy.get(".app__result__header__contents__button").click();
        cy.url().should("include", "/");
      }
    });
  });
});
