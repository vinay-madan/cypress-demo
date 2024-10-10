class ShoppingPage {

    visitCartPage() {
        cy.get('a[href="#/cart"]').click();

    }

    selectStuffedFrog(quantity) {
        Cypress._.times(quantity, () => {
            return cy.xpath('//h4[normalize-space()="Stuffed Frog"]/..//p/a').click();
        });
    }

    selectFluffyBunny(quantity) {
        Cypress._.times(quantity, () => {
            return cy.xpath('//h4[normalize-space()="Fluffy Bunny"]/..//p/a').click();
        });
    }

    selectValentineBear(quantity) {
        Cypress._.times(quantity, () => {
            return cy.xpath('//h4[normalize-space()="Valentine Bear"]/..//p/a').click();
        });
    }

}

export default ShoppingPage;
