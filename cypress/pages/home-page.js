class HomePage {

    visit() {
        cy.visit('https://jupiter.cloud.planittesting.com/')
    }

    selectContactPage() {
        return cy.get('a[href="#/contact"]').click();
    }

    clickStartShopping() {
        cy.get('.btn.btn-success.btn-large').click();
    }

}

export default HomePage;
