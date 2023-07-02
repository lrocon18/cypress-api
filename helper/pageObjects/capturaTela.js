/// <reference types="cypress" />
const addContext = require('mochawesome/addContext');

let prevNome = [];
class Helper {
    capturaTela(nome) {
        cy.screenshot(nome.toString(), {
            capture: 'runner'
        }).then(() => {
            Cypress.on('test:after:run', (test) => {
                if (!prevNome.includes(nome)) {
                    addContext({
                        test
                    },
                    {
                        title: 'Captura de Tela ',
                        value: `./screenshots/${Cypress.spec.name}/${nome}.png`
                    });
                    prevNome.push(nome);
                }
            });
        });
    }
} 

export default new Helper();