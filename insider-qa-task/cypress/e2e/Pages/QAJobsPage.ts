import "cypress-real-events";

class QAJobsPage {
  visit() {
    cy.visit('https://useinsider.com/careers/quality-assurance/');
  }

  clickSeeAllQAJobs() {
    cy.contains('See all QA jobs').click();
  }

  scrollDown() {
    cy.scrollTo(0, 200);
  }

  selectLocation(location: string) {
    cy.get('#select2-filter-by-location-container').click();
    cy.contains('li', location).click();
  }

  selectDepartment(department: string) {
    cy.get('#select2-filter-by-department-container').click();
    cy.contains('li', department).click();
  }

  verifyJobListing() {
    cy.get('.position-list-item').should('exist');
    
    cy.get('.position-list-item')
      .should('have.attr', 'data-location', 'istanbul-turkey')
      .and('have.attr', 'data-team', 'qualityassurance');

    cy.get('.position-title').contains('Senior Software Quality Assurance Engineer').should('exist');
    cy.get('.position-department').contains('Quality Assurance').should('exist');
    cy.get('.position-location').contains('Istanbul, Turkey').should('exist');

    cy.get('a[href*="jobs.lever.co/useinsider"]').should('exist').click({force: true});
  }
}

export default QAJobsPage;  