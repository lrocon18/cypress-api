describe('Teste de Previsão do Tempo', () => {
    // Realizar uma solicitação GET a uma API para obter a previsão do tempo para uma determinada localização
    it('Deve retornar dados de previsão do tempo para São Paulo', () => {
      cy.request('GET', 'https://api.openweathermap.org/data/2.5/weather?q=SãoPaulo,br&appid=SUA_CHAVE_API')
        .then((response) => {
          // Verificar se o código de status da resposta é 200
          expect(response.status).to.eq(200);
          // Verificar se a resposta é um objeto JSON válido
          expect(response.body).to.be.an('object');
          // Verificar se a resposta contém informações sobre a localização
          expect(response.body).to.have.property('name', 'São Paulo');
          // Verificar se a resposta contém informações sobre o tempo
          expect(response.body).to.have.property('weather');
          expect(response.body.weather).to.be.an('array');
          expect(response.body.weather[0]).to.have.property('description');
          // Imprimir a resposta na tela
          console.log(response.body);
        });
    });
  });
  