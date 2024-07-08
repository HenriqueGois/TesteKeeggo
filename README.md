# Cypress Automated Tests - QA Project

Este repositório contém testes automatizados desenvolvidos com Cypress para o projeto de QA.

## Instalação

1. **Clonar o repositório:**
 git clone https://github.com/seu-usuario/seu-repositorio.git
 cd seu-repositorio


2. **Instalar as dependências:**
Certifique-se de ter o Node.js e o npm instalados. Execute o seguinte comando:
npm install

## Executando os Testes

Para executar os testes, utilize o seguinte comando:
npm run cy

Este comando executará os testes Cypress em modo headless.

## Estrutura do Projeto

- **cypress/integration:** Contém os arquivos de teste Cypress.
- **cypress/support/commands.js:** Contém comandos personalizados para reutilização nos testes.
- **cypress/fixtures:** Contém arquivos de dados de teste (por exemplo, testData.json).

## Testes Automatizados

### Funcionalidades Testadas

- **Busca de Produto:**
  - **Busca de produto existente:** Verifica se um produto válido pode ser encontrado.
  - **Busca de produto inexistente:** Verifica o comportamento quando um produto inexistente é buscado.

- **Adicionar Produto ao Carrinho:**
  - **Adicionar um produto ao carrinho:** Verifica se um produto pode ser adicionado corretamente ao carrinho de compras.

- **Validações de Pagamento:**
  - **Validações na tela de pagamento:** Verifica se o processo de pagamento funciona corretamente após selecionar um produto e ir para o checkout.

## Dados de Teste

Os dados de teste estão localizados no arquivo `cypress/fixtures/testData.json`. Certifique-se de atualizar este arquivo com os dados necessários antes de executar os testes.

## Contribuição

Para contribuir com melhorias ou correções, sinta-se à vontade para enviar um pull request.

## Autor

Henrique Gois - [GitHub](https://github.com/HenriqueGois)

---

**Nota:** Certifique-se de ter o ambiente Cypress configurado corretamente antes de executar os testes. Consulte a documentação oficial do [Cypress](https://docs.cypress.io) para mais informações.
