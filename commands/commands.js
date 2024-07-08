class commands {

    goHomePage() {
        // Acessar a pagina
        cy.viewport(1080, 641)
        cy.visit('https://advantageonlineshopping.com')
        cy.get('a [id=hrefUserIcon]', { timeout: 10000 }).should('be.visible')        

    }
    login(login){
        cy.get('[id=menuUser]', { timeout: 10000 }).should('be.visible').click()
        cy.get('input[name=username]', { timeout: 10000 }).should('be.visible').type(login.user)
        cy.get('input[name=password]', { timeout: 10000 }).should('be.visible').type(login.password)
        cy.get('button[id=sign_in_btn]').should('be.visible').click()
        cy.get('a[id=menuUserLink] [class*=hi-user]').should('be.visible')
        
    }
    searchProdut(product) {
        cy.get('input[name=mobile_search', { timeout: 10000 }).should('be.visible')
        cy.get('input[name=mobile_search').type(`${product.name}`)
        cy.get('div[id=mobileSearch] [id=menuSearch]').click()

    }

    validateSearchProdut(product) {
        cy.get('[class="category-type-products ng-isolate-scope"]', { timeout: 10000 }).should('be.visible')
        cy.get('[id=searchResultLabel]').contains(product.name)
        cy.get('[class="category-type-products ng-isolate-scope"] [class^="productName"]').contains(product.name, { matchCase: false }, { timeout: 10000 })
    
    }

    selectProdut(product) {
        cy.get('[class="category-type-products ng-isolate-scope"] [class^="productName"]').contains(product.name, { matchCase: false }, { timeout: 10000 }).click()
    
    }

    validateSelectProdut(product) {
        cy.get('div [id=Description]').contains(product.name, { matchCase: false }, { timeout: 10000 })
        cy.get('div [id=Description]').contains(product.description, { matchCase: false }, { timeout: 10000 })
    }

    addProductToCart(){
        cy.get('button[name=save_to_cart]').should('be.visible').click()
        
    }
    validatePopUpCart(){
        cy.get('[id=toolTipCart]', { timeout: 10000 }).should('be.visible')
    }

    goCartPage(){
        cy.get('[id=menuCart]', { timeout: 10000 }).should('be.visible').click()
        cy.get('[id=shoppingCart]', { timeout: 10000 }).should('be.visible') 
    }

    validateShoppingCart(product){
        cy.get('[id=shoppingCart] [class*=productName]').contains(product.name, { matchCase: false }, { timeout: 10000 })
    
    }
    clickOnCheckout(){
        cy.get('button[id=checkOutButton]').should('be.visible').click()
    }

    validatePayment(product, login){
        cy.get('div[id=orderPayment]').should('be.visible', { timeout: 10000 })
        cy.get('div[id=userCart]').contains(product.name, { matchCase: false }, { timeout: 10000 })
        cy.get('div[id=userDetails]').contains(login.name, { matchCase: false }, { timeout: 10000 })
        cy.get('div[id=userDetails]').contains(login.cep, { matchCase: false }, { timeout: 10000 })
        cy.get('div[id=userDetails]').contains(login.cel, { matchCase: false }, { timeout: 10000 })
    
    }





}
export default new commands;