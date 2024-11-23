
describe("playground Login & product purchase", () => {
    it("the process", () => {
        cy.visit("https://ecommerce-playground.lambdatest.io/");

        // login
        cy.get("a[href*='https://ecommerce-playground.lambdatest.io/index.php?route=account/account']").eq(1).click();
        cy.get(".fa-sign-in-alt").click()
        cy.get("input[name='email']").type("jubuck08@yahoo.com");
        cy.get("input[name='password']").type("Alan");
        cy.get("input[type='submit']").click();

        // search for product
        cy.get("input[name='search']").eq(0).type("iphone");
        cy.get("button[type='submit']").eq(0).click();
        cy.get("#mz-product-grid-image-55-212469").click();
        cy.get(".button-buynow").click();

        // inputing shipping information
        // cy.get(".custom-radio").eq(1).find("input[type='radio']").click()   or   // ("#input-payment-address-new")
        cy.get('#payment-address > :nth-child(3) > .custom-control > .custom-control-label').click()
        cy.get("input[name='firstname']").type("alan");
        cy.get("input[name='lastname']").type("strange");
        cy.get("input[name='address_1']").type("gwagwalada wuse");
        cy.get("input[name='city']").type("FCT");
        cy.get("input[name='postcode']").type("W214BJ");

        //country & state selection
        cy.get("#input-payment-country").select("156");
        cy.get("#input-payment-zone").select("2389");

        //clicking a check box
        // cy.get("input[type='checkbox']").check({ force: true })
        cy.get(".custom-control-label").eq(9).click()

        cy.get("#button-save").click()
        cy.get("#button-confirm").click()
        cy.wait(4000)

        // confirm that information conatins certain text
        cy.get('.page-title')
        // cy.contains("Your order has been placed!")  . note that this is used to search the whole browser







    })
})