// bbcSportPage.js
class BBCSportPage {
  acceptCookiePolicy() {
    cy.findByRole('button', { name: 'Yes, I agree' }).click();
  }

  getArticlesWithOpenComments() {
    const hrefArray = [];
  
    cy.get('ul')
      .find('li')
      .each(($li) => {
        if ($li.find('span[data-testid="participate:comments"]').length > 0) {
          const href = $li.find('a').prop('href');
          console.log('Found href:', href); // Add this line to log the href
          hrefArray.push(href);
        }
      });
  
    console.log('hrefArray:', hrefArray); // Add this line to log the entire hrefArray
    return hrefArray;
  }
  visitArticleWithComments(href) {
    cy.visit(href);
  }

  clickViewCommentsButton() {
    cy.findByRole('button', { name: /View Comments/i }).should('exist').click();
    cy.wait(1000)
  }

  assertSignInOrRegisterElementsExist() {
    cy.wait(1000)
    cy.get('.id-cta-button').should('exist');
  }

  goBack() {
    cy.go('back');
  }
}

export default BBCSportPage;