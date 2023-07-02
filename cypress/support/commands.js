import Helper from '../../helper/pageObjects/capturaTela';

Cypress.Commands.add('geraScreenshot' , () => {
    let count = 0;
    count++;
    Helper.capturaTela(`cenario${count}`);
  });