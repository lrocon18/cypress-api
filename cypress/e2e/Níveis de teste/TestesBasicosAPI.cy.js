

describe('Teste Básico com API do Pokemon', () => {
  it('Deve buscar dados da API Pokemon', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/1') //Aqui eu indico com o comando REQUEST a URL da API que vou utilizar
      .then((response) => { //Então trago o parâmetro que desejo, que no caso é a resposta da API.
        try { //Aqui realizo uma forma diferente, executo um try/catch , abordarei outras formas a frente.

          expect(response.status).to.eq(200) //Após o TRY, eu indico oque eu espero do resultado
          //No caso eu espero que dentro da RESPOSTA da API, o status dela seja 200 (OK).

          expect(response.body).to.have.property('name') // Aqui não é diferente, apenas quero extrair de dentro do body da API
          //Que exista a propriedade ´´NAME``.
          expect(response.body).to.have.property('height')
          expect(response.body).to.have.property('weight')
        } catch (error) { //No CATCH eu dou a possibilidade de API me relatar problema está acontecendo
          console.error('Erro ao buscar os dados do Pokémon: ', error) //Assim me apontando o problema com uma mensagem customizada.
          //Este é um exemplo de teste que possa ser usado no seu dia a dia para verificar se a API está
          //Realmente se comunicando com os dados necessários.
        }
      })
  })
// Verificação da resposta HTTP
describe('Verificação da resposta HTTP', () => {
  it('Deve retornar status 200 ao realizar uma solicitação GET', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

// Verificação de Conteúdo
describe('Verificação de Conteúdo', () => {
  it('Deve retornar um JSON válido ao realizar uma solicitação GET', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response) => {
      expect(response.body).to.be.an('array');
      });
    });
  });
})

