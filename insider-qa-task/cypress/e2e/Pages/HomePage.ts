class HomePage {
  visit() {
      cy.visit('https://useinsider.com');
  }

  checkTitle() {
      cy.title().should('eq', '#1 Leader in Individualized, Cross-Channel CX — Insider');
  }

  clickCompanyButton() {
      cy.contains('Company').click();
  }

  clickCareersButton() {
      cy.get('.dropdown-sub').contains('Careers').click();
  }
}

export default HomePage;