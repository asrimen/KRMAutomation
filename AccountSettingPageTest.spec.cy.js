  /// <reference types="cypress" />


  describe('Test Case For Order Process', () => {
    beforeEach(() => {
      // Visit the application
      cy.visit('https://kevinroot.test.sandbox3000.com/auth/login') // Replace with your application's URL
      cy.wait(10000)

      //Login User account 


            // Attempt to log in
            cy.get(':nth-child(1) > .q-field > .q-field__inner > .q-field__control').type('rimen@itconquest.com');
  
            cy.get('.q-mb-md > .q-field > .q-field__inner > .q-field__control').type('123456');
        
            cy.get('.q-btn__content').click()    

            cy.wait(5000) 
            
      // Validate successful login
      cy.get(':nth-child(2) > .sectionTitle').should('contain','Explore Custom Options')


    });
  
    it('Should cler application storage and validate login state', () => {
      // Clear Local Storage
      cy.clearLocalStorage();
      cy.log('Local Storage cleared');
  
      // Clear Session Storage
      cy.window().then((win) => {
        win.sessionStorage.clear();
        cy.log('Session Storage cleared');
      });
  
      // Clear Cookies
      cy.clearCookies();
      cy.log('Cookies cleared');
  
      // Validate application behavior after clearing storage
      cy.reload(); // Reload the page to apply cleared storage state
      cy.contains('Login').should('be.visible'); // Example: Check if the login button is visible
    });
  
    it('Should perform a new login after clearing storage', () => {
      // Clear application storage
      cy.clearLocalStorage();
      cy.window().then((win) => {
        win.sessionStorage.clear();
      });
      cy.clearCookies();
  
    });
  
    it('Click on Wellcome Menu setting page', () => { 



        cy.xpath("//div[@class='text-white q-mr-md q-px-md menu-trigger navButton']").click()
        cy.wait(4000)

        cy.get('.q-ml-md > .navTitle').should('contain','Lastest Orders')


        cy.get('.q-mt-sm > :nth-child(1) > .navTitle').should('contain','Settings')

   
    





    })

})

