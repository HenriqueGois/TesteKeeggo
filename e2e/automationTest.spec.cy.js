import commands from "../commands/commands"

describe('Teste Henrique Gois - QA', () => {
  beforeEach(function () {
    // Pegar massa de teste 
    cy.fixture('testData').then((td) => {
        this.testData = td
  })
})

// Funcionalidade: Busca de Produto
// Cenário: Usuário busca um produto valido
//   Dado que o usuário está na página inicial
//   Quando o usuário insere um produto existente na barra de pesquisa
//   E clica no botão de busca
//   Então os resultados da busca devem exibir o produto buscado

  it('Busca de produto existemte', function () {
    commands.goHomePage()
    commands.searchProdut(this.testData.product)
    commands.validateSearchProdut(this.testData.product)
  })

// Funcionalidade: Busca de Produto
// Cenário: Usuário busca um produto invalido
//   Dado que o usuário está na página inicial
//   Quando o usuário insere um produto inexistente na barra de pesquisa
//   E clica no botão de busca
//   Então a busca não deve exibir nenhum resultado. 

  it('Busca de produto inexistente', function () {
    commands.goHomePage()
    commands.searchProdut("asd")
    // Valida se não foi encontrado nenhum produto
    cy.get('[class*="noProducts"]').should('be.visible')
  })

  // Funcionalidade: Adicionar Produto ao Carrinho
  // Cenário: Usuário adiciona um produto ao carrinho com sucesso
  //   Dado que o usuário está na página de resultados da busca
  //   Quando o usuário clica em algum produto
  //   E clica no botão de ADD TO CART
  //   Então o produto  deve ser adicionado ao carrinho
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

  // Funcionalidade: Validação de Produtos no Carrinho
  // Cenário: Usuário valida produtos no carrinho na tela de pagamento
  //   Dado que o usuário está na página do carrinho
  //   Quando o usuário clica no botão de CHECKOUT
  //   Então o produto deve estar presente na lista de produtos da tela de ORDER
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

