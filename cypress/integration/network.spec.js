/// <reference types="cypress" />

// Testing all the End Points work properly or not
context("Network Requests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("cy.request() - Planets XHR request", () => {
    cy.request("https://findfalcone.herokuapp.com/planets").should(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).deep.equal([
          { name: "Donlon", distance: 100 },
          { name: "Enchai", distance: 200 },
          { name: "Jebing", distance: 300 },
          { name: "Sapir", distance: 400 },
          { name: "Lerbin", distance: 500 },
          { name: "Pingasor", distance: 600 },
        ]);
        expect(response).to.have.property("headers");
        expect(response).to.have.property("duration");
      }
    );
  });

  it("cy.request() - Vehicles XHR request", () => {
    cy.request("https://findfalcone.herokuapp.com/vehicles").then(
      (response) => {
        expect(response).property("status").to.equal(200);
        expect(response.body).deep.equal([
          { name: "Space pod", total_no: 2, max_distance: 200, speed: 2 },
          { name: "Space rocket", total_no: 1, max_distance: 300, speed: 4 },
          { name: "Space shuttle", total_no: 1, max_distance: 400, speed: 5 },
          { name: "Space ship", total_no: 2, max_distance: 600, speed: 10 },
        ]);
        expect(response).to.include.keys("headers", "duration");
      }
    );
  });
});
