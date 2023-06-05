import BBCSportPage from '../support/Section/bbcSportPage';

describe('Sign-In Test', () => {
  const bbcSportPage = new BBCSportPage();
  it.only('should fill in sign-in details and submit the form with invalid information', () => {
    cy.visit('https://www.bbc.co.uk/sport');

    // Find article with open comments
    const hrefArray = bbcSportPage.getArticlesWithOpenComments();

    cy.wrap(hrefArray).each((href) => {
      bbcSportPage.visitArticleWithComments(href);

      // Click on the "View Comments" button
      cy.findByRole('button', { name: /View Comments/i }).should('exist').click();

      // Click on the sign-in button within the comments section
      cy.get('.comments__user-interactions-container .id-cta-button').click();

      cy.origin('https://account.bbc.com', () => {
          // Fill in sign-in details
          cy.get('#user-identifier-input').click().type("username");
          cy.get('#password-input').click().type("password");
          cy.get('button', { name: 'Sign in' }).click();
          cy.get('#form-message-password').should("exist", "be.visible").then(() => {
            return;
          });
        });
      });
    });
  });