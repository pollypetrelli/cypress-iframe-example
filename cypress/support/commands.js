//https://www.youtube.com/watch?v=khO8_YAej-s
Cypress.Commands.add('switchToIframe', (iframe) => {
  return cy
    .get(iframe)
  // i take 0, contentDocument and body for dev tools Elements as I want to access the body of the iframe
    .its('0.contentDocument.body')
    .should('not.be.empty')
  //cy.wrap as i want to wrap the custom command and use it with cypress commands like cy.type etc
    .then(cy.wrap);
});
