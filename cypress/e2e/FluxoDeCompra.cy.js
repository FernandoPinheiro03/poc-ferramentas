///<reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Fluxo de Compra - Palácio das Ferramentas', () => {
  beforeEach(() => {
    cy.accessSite()
    cy.clickOnAllowCookie()
    cy.makeLogin()
  })



  it('Test 1 - Realizar compra ao selecionar um produto na home', () => {
    cy.clickOnSomeProductOnHome()
    cy.clickOnBtnBuy()
    cy.clickOnSeeCart()
    cy.clickOnFinishBuy()
    cy.selectPaymentPix()
    cy.clickOnMakeOrder()
  })

  it('Test 2 - Realizar compra ao selecionar produto após fazer uma busca pelo nome do produto', () => {
    cy.searchProduct('carrinho para carga')
    cy.clickOnFirstProduct()
    cy.clickOnBtnBuy()
    cy.clickOnSeeCart()
    cy.clickOnFinishBuy()
    cy.selectPaymentPix()
    cy.clickOnMakeOrder()
  })

  it('Test 3 - Realizar compra ao selecionar produto após fazer uma busca pelo SKU do produto', () => {
    cy.searchProduct('76778')
    cy.clickOnFirstProduct()
    cy.clickOnBtnBuy()
    cy.clickOnSeeCart()
    cy.clickOnFinishBuy()
    cy.selectPaymentPix()
    cy.clickOnMakeOrder()
  })

  it('Test 4 - Realizar compra ao selecionar um produto na página de categorias', () => {
    cy.clickOnCategoryPage()
    cy.clickOnFirstProduct()
    cy.clickOnBtnBuy()
    cy.clickOnSeeCart()
    cy.clickOnFinishBuy()
    cy.selectPaymentPix()
    cy.clickOnMakeOrder()
  })

  it('Test 5 - Realizar compra ao selecionar um produto no banner principal', () => {
    cy.clickOnPrincipalBanner()
    cy.clickOnFirstProduct()
    cy.selectVoltage()
    cy.clickOnBtnBuy()
    cy.clickOnSeeCart()
    cy.clickOnFinishBuy()
    cy.selectPaymentPix()
    cy.clickOnMakeOrder()
  })


})



