class CareersPage {
  checkUrl() {
      cy.url().should('include', 'useinsider.com/careers');
  }

  checkTitle() {
      cy.title().should('eq', 'Ready to disrupt? | Insider Careers');
  }

  findYourCalling() {
      const scrollToFind = () => {
          cy.scrollTo('bottom');
          cy.get('h3').contains('Find your calling').then(($h3) => {
              if ($h3.length === 0) {
                  scrollToFind();
              } else {
                  cy.get('h3').contains('Find your calling').should('exist');
              }
          });
      };
      scrollToFind();
  }

  ourLocation() {
      const scrollToOurLocation = () => {
          cy.scrollTo('bottom');
          cy.get('h3').contains('Our Location').then(($h3) => {
              if ($h3.length === 0) {
                  scrollToOurLocation();
              } else {
                  cy.get('h3').contains('Our Location').should('exist');
              }
          });
      };
      scrollToOurLocation();
  }

  lifeAtInsider() {
      const scrollToLifeAtInsider = () => {
          cy.scrollTo('bottom');
          cy.get('h2').contains('Life at Insider').then(($h2) => {
              if ($h2.length === 0) {
                  scrollToLifeAtInsider();
              } else {
                  cy.get('h2').contains('Life at Insider').should('exist');
              }
          });
      };
      scrollToLifeAtInsider();
  }
}

export default CareersPage;