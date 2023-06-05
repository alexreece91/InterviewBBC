// signInTest.js
import { fillInSignInDetails } from "../support/functions";
import BBCSportPage from "../support/Section/bbcSportPage";

describe('Sign-In Test', () => {
  it.only('should fill in sign-in details and submit the form with invalid information', () => {
    const bbcSportPage = new BBCSportPage();
    cy.visit('/')

    const hrefArray = bbcSportPage.getArticlesWithOpenComments();
    const indexToCheck = 2; // Specify the desired index here

    const hrefToCheck = hrefArray[indexToCheck];

    if (hrefToCheck && typeof hrefToCheck === 'string') {
      bbcSportPage.visitArticleWithComments(hrefToCheck);

      bbcSportPage.clickViewCommentsButton();

      // Click on the sign-in button within the comments section
      cy.get('.comments__user-interactions-container .id-cta-button').click();

      cy.origin('https://account.bbc.com', () => {
        // Fill in sign-in details
        cy.get('#user-identifier-input').click().type("username");
        cy.get('#password-input').click().type("password");
        cy.get('button', { name: 'Sign in' }).click();
        cy.get("[data-bbc-title='password-error']").should("exist", "be.visible");
      });
    }
  });
});
