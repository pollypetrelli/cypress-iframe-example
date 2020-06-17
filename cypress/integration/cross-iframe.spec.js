/// <reference types="cypress" />
//in order to be able to test iframes with another domain i have to disable chromeWebSecurity
describe('Cross domain iframes', () => {
  // this test will fail unless you set chromeWebSecurity to false
  it('should let you switch to the iframe', () => {
    cy.visit('index.html');
    cy.switchToIframe('[data-cy="test-iframe"]');
  });
});
