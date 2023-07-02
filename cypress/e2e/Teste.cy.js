describe('Testes', () => {

  afterEach(() => {
    cy.geraScreenshot();
  });
  
it('Deve retornar um endereço de email válido', () => {
  cy.request('POST', 'https://api.mailboxvalidator.com/v1/validation/single', {
    apikey: 'SUA_CHAVE_API', //Exemplo de token que seria solicitado
    email: 'teste@exemplo.com', //Exemplo de email (A API NÃO SOLICITA PORÉM UTILIZEI)
  })
    .then((response) => {
      // Verificar se o código de status da resposta é 200
      expect(response.status).to.eq(200);
      // Verificar se a resposta é um objeto JSON válido
      expect(response.body).to.be.an('object');
      // Imprimir a resposta na tela
      console.log(response.body);
    });
  });

})