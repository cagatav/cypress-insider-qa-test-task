import HomePage from '../Pages/HomePage';
import CareersPage from '../Pages/CareersPage';
import QAJobsPage from '../Pages/QAJobsPage';

describe('Insider Website Test', () => {
    const homePage = new HomePage();
    const careersPage = new CareersPage();
    const qaJobsPage = new QAJobsPage();
    const cookiesAccept = '[id="wt-cli-accept-all-btn"]';

    describe('Home Page tests and redirect to Careers Page', () => {
        it('should visit and check the Home page', () => {
            homePage.visit();
            homePage.checkTitle();
            cy.get(cookiesAccept).click();
            homePage.clickCompanyButton();
            homePage.clickCareersButton();

            careersPage.checkUrl();
            careersPage.checkTitle();
            careersPage.findYourCalling();
            careersPage.ourLocation();
            careersPage.lifeAtInsider();
        });
    });

    describe('QA Jobs Page tests', () => {
        it('should navigate to QA Jobs and verify job listings', () => {
            qaJobsPage.visit();

            cy.get(cookiesAccept).click();

            qaJobsPage.clickSeeAllQAJobs();

            cy.wait(4000); 
            qaJobsPage.scrollDown();
            cy.wait(2000); 

            qaJobsPage.selectLocation('Istanbul, Turkey');
            qaJobsPage.selectDepartment('Quality Assurance');
            qaJobsPage.verifyJobListing();
        });
    });
});