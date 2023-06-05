// signInTest.js
import BBCSportPage from "../support/Section/bbcSportPage";

describe('Sign-In Test', () => {
  it('should fill in sign-in details and submit the form with invalid information', () => {
    const bbcSportPage = new BBCSportPage();
    cy.visit('https://www.bbc.co.uk/sport/football/65808462')

      bbcSportPage.clickViewCommentsButton();

      // Click on the sign-in button within the comments section
      cy.get('.comments__user-interactions-container .id-cta-button').click();

      cy.origin('https://account.bbc.com', () => {
        // Fill in sign-in details
        cy.get('#user-identifier-input').click().type("username");
        cy.get('#password-input').click().type("password");
		    cy.get('button', { name: 'Sign in' }).click();
        cy.get("[data-bbc-title='password-error']").should("exist", "be.visible").then(() => {
          return;
        });
      });
    });
  });

  describe('Sign-In invalid charaters', () => {
    it('should fill in sign-in details and submit the form with invalid information', () => {
      const bbcSportPage = new BBCSportPage();
      cy.visit('https://www.bbc.co.uk/sport/football/65808462')
  
        bbcSportPage.clickViewCommentsButton();
  
        // Click on the sign-in button within the comments section
        cy.get('.comments__user-interactions-container .id-cta-button').click();
  
        cy.origin('https://account.bbc.com', () => {
          // Fill in sign-in details
          cy.get('#user-identifier-input').click().type("!£%^&**");
          cy.get('#password-input').click().type(")(*&^%$£!ASDF");
          cy.get('button', { name: 'Sign in' }).click();
          cy.get("[data-bbc-title='username-error']").should("exist", "be.visible").then(() => {
            return;
          });
        });
      });
    });