/// <reference types = "Cypress"/>

describe('', () => {
    it('test1', () => {
        cy.enterWebsite()
        cy.get('.prdocutname').contains("Skinsheen").click().then(function (title) {
            cy.log("The product name is :" + title.text())
        })
    });
    it('test2', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
        cy.get('[for*="first"]').then((text) => {
            expect(text.text()).to.include('First name')
            cy.screenshot('new scs')
        })
    });
    it('test3', () => {
        cy.enterWebsite()
        cy.get('.prdocutname').each(($el, index, $list) => {
            cy.log("index " + index + ": " + $el.text())
        })
        cy.get(".pricetag.jumbotron [href='#']").each(($el, index, $list) => {
            cy.wrap($el).click()
        })
    })
    it('', () => {
        cy.enterWebsite()
        cy.get('.thumbnail').its('length').should('eq', 16)
        //cy.get('.thumbnail').should('have.length',16)

    });
    it('', () => {
        cy.enterWebsite()
        cy.get('.nav-pills.categorymenu').children().eq(5).click()
    });
    it('', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        var price = 0, i = 0
        cy.get('#thumbnail-1 tr td:nth-child(3)').each(($el, index, $list) => {
            let price = Number($el.text())
            i += price
        }).then(() => {
            cy.log("Total = " + i)
        })
    })
    it('', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#thumbnail-1 tr td:nth-child(3)').eq(5).prev().should('have.text', 'Woods')
    })
    it('', () => {
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('.glyphicon-calendar').click()
        cy.get('.datepicker-switch').first().invoke('text').as('date')
        for (var i = 0; i < 8; i++) {
            if ("@date" != "August 2023") {
                cy.get('.next').first().click()
            }
        }
        cy.get('tr td').eq(4).click()


    });

});

