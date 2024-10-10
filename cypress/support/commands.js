Cypress.Commands.add('visitHomePage', () => {
    cy.visit('https://jupiter.cloud.planittesting.com/');
});

Cypress.Commands.add('getValue', (selector) => {
    cy.get(selector)
        .then($input => $input.val())
})