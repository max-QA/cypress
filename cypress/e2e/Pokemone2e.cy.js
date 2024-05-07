describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://pokemonbattle.me/login'); 
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
         cy.get('#password').type('USER_PASSWORD');
         cy.get('.auth__button').click();

         cy.wait(1000); 

         cy.get('.header__btns > [href="/shop"]').click();
         cy.get('.pokemon__title').contains('Магазин').should('be.visible');
         cy.get('.shop__list').should('be.visible');
         cy.get('.shop__button').should('be.visible');

         cy.wait(1000); 

         cy.get('.available > button').first().click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('12.30');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('MAXONCHIK');
         cy.wait(1000);      
         cy.get('.pay-btn').click();
         
         cy.wait(1000);
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();

         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
         //cy.get('.payment__success1').should('be.visible');
         cy.contains('Покупка прошла успешно').should('be.visible');
         cy.wait(1000);
         cy.get('.payment__adv').click();

     })
     
    


 })
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 