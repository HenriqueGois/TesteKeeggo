import commands from "../commands/commands"

describe('Teste Henrique Gois - QA', () => {
  beforeEach(function () {
    // Pegar massa de teste 
    cy.fixture('testData').then((td) => {
        this.testData = td
  })
})
  it('Busca de produto existemte', function () {
    commands.goHomePage()
    commands.searchProdut(this.testData.product)
    commands.validateSearchProdut(this.testData.product)
  })
  it('Busca de produto inexistente', function () {
    commands.goHomePage()
    commands.searchProdut("asd")
    cy.get('[class*="noProducts"]').should('be.visible')
  })
  it('Adiciona um produto ao carrinho ', function () {
    commands.goHomePage()
    commands.searchProdut(this.testData.product)
    commands.validateSearchProdut(this.testData.product)
    commands.selectProdut(this.testData.product)
    commands.validateSelectProdut(this.testData.product)
    commands.addProductToCart()
    commands.validatePopUpCart()
    commands.goCartPage()
    commands.validateShoppingCart(this.testData.product)
  })
  it('Validações de Pagamento', function () {
    commands.goHomePage()
    commands.login(this.testData.login)
    commands.searchProdut(this.testData.product)
    commands.validateSearchProdut(this.testData.product)
    commands.selectProdut(this.testData.product)
    commands.validateSelectProdut(this.testData.product)
    commands.addProductToCart()
    commands.validatePopUpCart()
    commands.goCartPage()
    commands.clickOnCheckout()
    commands.validatePayment(this.testData.product, this.testData.login)
  })
})

