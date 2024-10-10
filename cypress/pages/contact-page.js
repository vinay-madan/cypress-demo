class ContactPage {

    fillFirstName(forename) {
        cy.get('#forename').type(forename);
    }

    fillEmail(email) {
        cy.get('#email').type(email);
    }

    fillMessage( message) {
        cy.get('#message').type(message);
    }


    clickSubmitButton() {
        cy.get('.form-actions a').click();
    }

    validateFirstNameErrorMessage() {
        cy.get('#forename-err').then((element) => {
             const text = element.text();
             console.log(text);
             expect(text).to.eq('Forename is required');
        });
    }

    validateEmailErrorMessage() {
        cy.get('#email-err').then((element) => {
            const text = element.text();
            console.log(text);
            expect(text).to.eq('Email is required');
        });
    }

    validateMessageErrorMessage() {
        cy.get('#message-err').then((element) => {
            const text = element.text();
            console.log(text);
            expect(text).to.eq('Message is required');
        })
    }

    validateSuccessMessage(user) {
        cy.get('.alert.alert-success').then((element) => {
            const text = element.text();
            console.log(text);
            expect(text).to.contain(`Thanks ${user}, we appreciate your feedback`);
        });

    }

}

export default ContactPage;
