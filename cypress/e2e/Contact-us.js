/// <reference types = "Cypress"/>

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get("[name ='first_name']").type("Tarik")
        cy.get("[name ='last_name']").type("Mezgouria")
        cy.get("[name ='email']").type("Test@test.com")
        cy.get("[name ='message']").type("This is a comment")
        cy.get("[type='submit']").click()
        cy.get('div h1').then(function(element){
           const text = element.text()
           expect(text).contains('Thank You')
        })

    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get("[name ='first_name']").type("Tarik")
        cy.get("[name ='last_name']").type("Mezgouria")
        cy.get("[name ='message']").type("This is a comment")
        cy.get("[type='submit']").click()
        cy.get('body').then(function(element){
            const text = element.text()
            expect(text).contains('Error')
         })
    });
})