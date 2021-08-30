import { mount } from "@cypress/react"; // or @cypress/vue
import Footer from "./footer";

describe("Unit Testing of Footer Component", () => {
  it("renders Footer", () => {
    mount(<Footer />);
    cy.get(".app__footer").should("exist");
    cy.get(".app__footer__contents").should("exist");
    cy.get(".app__footer__contents__logo").should("exist");
    cy.get(".app__footer__contents").contains(
      "Made with ❤️ bySamrat Ghosh© 2021"
    );
    cy.get(".app__footer__contents__logo").contains("❤️");
  });
  it("redirects user to the linkedIn profile", () => {
    mount(<Footer />);
    cy.get(".app__footer").should("exist");
    cy.get(".app__footer__contents").should("exist");
    cy.get(".app__footer__contents a").should("exist");
    cy.get(".app__footer__contents a").click();
  });
});
