describe('Teste Intermediário de API', () => {
  // Realizar uma solicitação GET a uma API pública
  it('Deve retornar dados JSON válidos', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // Verificar se o código de status da resposta é 200
        expect(response.status).to.eq(200);
        // Verificar se a resposta é um objeto JSON válido
        expect(response.body).to.be.an('array');
        // Verificar se o objeto JSON tem pelo menos um item
        expect(response.body).to.have.length.of.at.least(1);
        // Imprimir a resposta na tela
        console.log(response.body);
      });
  });
});
