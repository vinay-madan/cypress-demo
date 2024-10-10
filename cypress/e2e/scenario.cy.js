import HomePage from "../pages/home-page";
import ContactPage from "../pages/contact-page";
import ShoppingPage from "../pages/shopping-page";
import CartPage from "../pages/cart-page";

describe('Test Suite', () => {
    let homePage;
    let contactPage;
    let shoppingPage;
    let cartPage;

    before(() => {
       homePage = new HomePage();
       contactPage = new ContactPage();
       shoppingPage = new ShoppingPage();
       cartPage = new CartPage();
    });

    beforeEach(() => {
       homePage.visit();

    });

    it('Test Case1 - Should verify error messages', () => {

        // Verify error messages when the form is left empty
        homePage.selectContactPage();
        contactPage.clickSubmitButton();
        contactPage.validateFirstNameErrorMessage();
        contactPage.validateEmailErrorMessage();
        contactPage.validateMessageErrorMessage();

        // Verify error messages are gone when mandatory fields are populated
        contactPage.fillFirstName('John');
        contactPage.fillEmail('john.smith@gmail.com');
        contactPage.fillMessage('Demo Cypress Test Case 1');
        cy.get('#forename-err').should('not.exist');
        cy.get('#mail-err').should('not.exist');
        cy.get('#message-err').should('not.exist');

    });

    it('Test Case2 - Should verify successful submission message', () => {

        // Verify successful submission message
        homePage.selectContactPage();
        contactPage.fillFirstName('John');
        contactPage.fillEmail('john.smith@gmail.com');
        contactPage.fillMessage('Demo Cypress Test Case 1');
        contactPage.clickSubmitButton();
        cy.get('.modal-body .progress.progress-info').should("not.exist");
        contactPage.validateSuccessMessage('John');
    });

    it('Test Case3 - Add products to card and verify the total', () => {

        // Buy 2 Stuffed Frog, 5 Fluffy Bunny, 3 Valentine Bear
        homePage.clickStartShopping();
        shoppingPage.selectStuffedFrog(2);
        shoppingPage.selectFluffyBunny(5);
        shoppingPage.selectValentineBear(3);
        shoppingPage.visitCartPage();

        // Verify the subtotal for each product is correct
        cartPage.getSubTotal(1).should('eq', '$21.98');
        cartPage.getSubTotal(2).should('eq', '$49.95');
        cartPage.getSubTotal(3).should('eq', '$44.97');

        // Verify the price for each product
        cartPage.getPrice(1).should('eq', '$10.99');
        cartPage.getPrice(2).should('eq', '$9.99');
        cartPage.getPrice(3).should('eq', '$14.99');

        // Verify that total = sum(sub totals)
        const sumSubTotal = parseFloat('21.98') + parseFloat('49.95') + parseFloat('44.97');
        cartPage.getTotal().then(priceTotal => {
        if (typeof priceTotal === 'string') {
            const price = priceTotal.replace(/^.{6}/g,'').trim();
            const numericPrice = parseFloat(price);
            expect(numericPrice).to.eq(sumSubTotal)
        } else {
            return ('Price total is not a string');
         }
       });

    });
});