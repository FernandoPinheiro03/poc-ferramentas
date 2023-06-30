/// <reference types="Cypress" />

import elementsScreen from './elements/elementsScreen'
const elements = new elementsScreen

Cypress.Commands.add('accessSite', () => {
    cy.visit('https://palaciodasferramentas.com.br/')
    cy.viewport(1280, 720)
})

Cypress.Commands.add('makeLogin', () => {
    cy.get(elements.BTN_ENTER()).click()
    cy.get(elements.FIELD_EMAIL()).type('fernandopinheiro03@gmail.com')
    cy.get(elements.FIELD_PASSWORD()).type('')
    cy.get(elements.BTN_ENTER_ON_LOGIN()).click()
})


Cypress.Commands.add('clickOnAllowCookie', () => {
    cy.get(elements.BTN_ALLOW_COOKIE()).click()
})

Cypress.Commands.add('clickOnPrincipalBanner', () => {
    cy.get(elements.PRINCIPAL_BANNER()).click()
})

Cypress.Commands.add('clickOnFirstProduct', () => {
    cy.get(elements.FIRST_PRODUCT()).click()
})

Cypress.Commands.add('clickOnBtnBuy', () => {
    cy.get(elements.BTN_BUY()).click()
})

Cypress.Commands.add('selectVoltage', () => {
    cy.get(elements.DROPDOWN_VOLTAGE()).select('934')
})

Cypress.Commands.add('clickOnSeeCart', () => {
    cy.get(elements.BTN_SEE_CARD()).click()
})

Cypress.Commands.add('clickOnFinishBuy', () => {
    cy.get(elements.BTN_FINISH_BUY()).click()
})

Cypress.Commands.add('selectPaymentPix', () => {
    cy.wait(10000)
    cy.get(elements.OPTION_PIX()).click()
})

Cypress.Commands.add('clickOnMakeOrder', () => {
   return true
})

Cypress.Commands.add('searchProduct', (string) => {
    cy.get(elements.INPUT_SEARCH()).type(string).type('{enter}')
 })

 
Cypress.Commands.add('clickOnSomeProductOnHome', () => {
    cy.get(elements.SOME_PRODUCT_ON_HOME()).click()
 })

 Cypress.Commands.add('clickOnCategoryPage', () => {
    cy.get(elements.BTN_CATEGORY_PAGE()).click()
})

 






