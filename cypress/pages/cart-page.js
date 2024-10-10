class CartPage {

    getTotal() {
       return  cy.get('.total.ng-binding').invoke('text');

    }

    getSubTotal(element) {
        return cy.get(`tbody tr:nth-child(${element}) td:nth-child(4)`)
                 .invoke('text');

    }

    getPrice(element) {
        return cy.get(`tbody tr:nth-child(${element}) td:nth-child(2)`)
            .invoke('text');

    }


}

export default CartPage;
