describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвет кнопки восст пароль
         
         cy.get('#mail').type('german@dolnikov.ru'); //верный логин
         cy.get('#pass').type('iLoveqastudio1'); //верный пароль
         cy.get('#loginButton').click(); // нажал войти

         //cy.wait(5000); //задержка 5 сек
         
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверка текста
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //виден крестик
     })
     
     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвет кнопки восст пароль
        
       
        cy.get('#forgotEmailButton').click(); // нажал восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввел почту для восстановления
        cy.get('#restoreEmailButton').click(); // нажал отправить код
        
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверка текста
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //виден крестик
    })

    it('НЕверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвет кнопки восст пароль
        
        cy.get('#mail').type('german@dolnikov.ru'); //верный логин
        cy.get('#pass').type('iLoveqastudio8'); // НЕверный пароль
        cy.get('#loginButton').click(); // нажал войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверка текста
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //виден крестик
    })

     it('Верный пароль и НЕверный логин', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвет кнопки восст пароль
        
        cy.get('#mail').type('vasya@dolnikov.ru'); //верный логин
        cy.get('#pass').type('iLoveqastudio1'); //верный пароль
        cy.get('#loginButton').click(); // нажал войти

       // cy.wait(5000); //задержка 5 сек
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверка текста
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //виден крестик
    })
    
        
    it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвет кнопки восст пароль
        
        cy.get('#mail').type('germandolnikov.ru'); //логин без @
        cy.get('#pass').type('iLoveqastudio1'); // НЕверный пароль
        cy.get('#loginButton').click(); // нажал войти
        
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверка текста
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //виден крестик
    })
   
    it('Приведение у строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвет кнопки восст пароль
        
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //верный логин
        cy.get('#pass').type('iLoveqastudio1'); //верный пароль
        cy.get('#loginButton').click(); // нажал войти

        //cy.wait(5000); //задержка 5 сек
        
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверка текста
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //виден крестик
    })


 })
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 