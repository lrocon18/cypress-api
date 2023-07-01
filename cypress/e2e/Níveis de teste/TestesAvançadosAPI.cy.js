// Teste de Carga
describe('Teste de Carga', () => { //Aqui um teste simples de carga realizando várias solicitações ao mesmo tempo
  it('Deve ser capaz de lidar com 10 solicitações GET simultâneas', () => {
    const promises = Array(10).fill().map(() => {
      return cy.request({
        method: 'GET', //Pode ser elevado para um nível maior, realizando requisições POST com informações distintas ao mesmo tempo.
        //Assim testando a capacidade da API de receber informações.
        url: 'www.google.com',
        //Este teste cria uma matriz de 100 promessas, cada uma fazendo uma solicitação GET à API.
      });
    });
  })
})

describe('Teste Avançado de API', () => {
  // Realizar uma solicitação GET a uma API pública com parâmetros na query string
  it('Deve retornar dados JSON filtrados', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts?userId=1')
      .then((response) => {
        // Verificar se o código de status da resposta é 200
        expect(response.status).to.eq(200);
        // Verificar se a resposta é um objeto JSON válido
        expect(response.body).to.be.an('array');
        // Verificar se todos os itens no objeto JSON têm o atributo "userId" igual a 1
        response.body.forEach((item) => {
          expect(item).to.have.property('userId', 1);
        });
        // Imprimir a resposta na tela
        console.log(response.body);
      });
  });
});


describe('Teste de Autenticação de API', () => {
  // Ler o arquivo de credenciais com as informações de usuário e senha
  beforeEach(() => {
    cy.fixture('credenciais.json').then((credenciais) => {
      this.credenciais = credenciais;
    });
  });

  // Realizar uma solicitação POST a uma API de autenticação com as credenciais lidas
  it('Deve retornar um token de autorização válido', () => {
    cy.request('POST', 'https://api.example.com/authenticate', this.credenciais)
      .then((response) => {
        // Verificar se o código de status da resposta é 200
        expect(response.status).to.eq(200);
        // Armazenar o token de autorização para uso futuro
        this.token = response.body.token;
        // Imprimir o token na tela
        console.log(this.token);
      });
  });
});

