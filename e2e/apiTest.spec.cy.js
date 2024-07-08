

it('Validate GET product details', () => {
  cy.request({
    method: 'GET',
    url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=Beats Studio 2 Over-Ear Matte Black Headphones&quantityPerEachCategory=3',
    // O teste falhará se o status da resposta for um erro

  }).then((response) => {
    expect(response.body).to.not.be.empty;
    cy.log(response.body[0].products[0].productName)
    expect(response.body[0].products[0].productName).to.equal('Beats Studio 2 Over-Ear Matte Black Headphones');
  });
});

it('Validate POST product image upload', () => {
  // Caminho do arquivo a ser enviado
  const filePath = 'C:/Users/henri/Downloads/color-test-television-checking-quality-600w-72627163.jpg';

  // URL da API e parâmetros
  const url = 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/882161161/ABCDEF%23%232300/BLACK?product_id=15';

  // Headers da requisição
  const headers = {
    'accept': '*/*',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjo4ODIxNjExNjEsInN1YiI6IlRlc3RlR29pcyIsInJvbGUiOiJVU0VSIn0.Aq2AB6ZO-_lCDx81NC439mbxz1O46B_41gruVLZF8ig',
    'Content-Type': 'multipart/form-data'
  };

  // Realiza a requisição POST com Cypress
  cy.fixture(filePath, 'binary').then((fileContent) => {
    const formData = new FormData();
    formData.append('file', Cypress.Blob.binaryStringToBlob(fileContent), 'color-test-television-checking-quality-600w-72627163.jpg');

    cy.request({
      method: 'POST',
      url: url,
      headers: headers,
      body: formData,
      timeout: 60000, // Ajuste o timeout conforme necessário
    }).then((response) => {
    });
  });
});


