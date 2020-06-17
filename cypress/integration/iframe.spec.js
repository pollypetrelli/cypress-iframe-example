/// <reference types="cypress" />

// read https://www.nicknish.co/blog/cypress-targeting-elements-inside-iframes and https://github.com/cypress-io/cypress/issues/136 for more on iframes
describe('IFrames testing in Cypress', () => {
  const iframe = '#mce_0_ifr';

  beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/iframe');
    cy.get('#mceu_3').as('boldIcon');
    cy.get('#mceu_9').as('listIcon');
  });

  it('should let you switch to the iframe', () => {
    cy.switchToIframe(iframe)
      .clear()
      .type('hello')
    //use command a to select text. with cypress we can invoke the keyboard commands
      .type('{command}a')
      .should('have.text', 'hello');
    cy.get('@boldIcon').click();
    cy.get('@listIcon').click();
    cy.switchToIframe(iframe).find('ul li strong').should('have.text', 'hello');
  });

  it('should let you switch to the iframe using the cypress iframe plugin', () => {
    cy.frameLoaded(iframe);
    cy.iframe()
      .clear()
      .type('hello')
      .type('{command}a')
      .should('have.text', 'hello');
    cy.get('@boldIcon').click();
    cy.get('@listIcon').click();

    cy.iframe().find('ul li strong').should('have.text', 'hello');
  });
});
