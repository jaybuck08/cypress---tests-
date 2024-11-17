

describe("wordpress Login", () => {
    it("login", () => {
        cy.visit("https://www.crucibleng.com/wp-admin")
        cy.get("#user_login").type("helpdesk@zenera.mx")
        cy.get("#user_pass").type("DEV_zen2024")
        cy.get(".button-primary").click()


        // adding new post
        cy.get(".ab-label").eq(2).click()

        cy.get("iframe[name='editor-canvas']").then((data) => {
            const body = data.content().find("body");

            cy.wrap(body).find(".wp-block-post-title")
        })

        // cy.getIframeBody("iframe[name='editor-canvas']").find(".wp-block-post-title")
        // cy.get(".wp-block-post-title").type("Mike Tyson & Jake Paul").


    })




})