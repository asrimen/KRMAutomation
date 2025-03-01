   /// <reference types="cypress" />


describe('Test Case For Order From Patients Page', () => {
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
  
    it('Should Login KRM application and Validate the page', () => {
  
    
  

  
      //Close Google Browser password manager window 
      cy.wait(4000)
      //cy.contains('OK').click({force: true});
  
      //cy.get('.disabled-button').click({ force: true });
  
  

  
    }); 




    it('Patients Page and Go to order page', () => {
      
        //Click on Patients button

        cy.xpath("//a[@class='q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--rectangle q-btn--rounded q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase navButton']//span[@class='q-btn__content text-center col items-center q-anchor--skip justify-center row']").click()  
        cy.wait(4000)
        //Click on First Patients 
        cy.get('tbody.q-pa-none > :nth-child(1) > :nth-child(1)').click()
        cy.wait(4000)

       cy.contains('Add new order').click()   // Click on Order button  


       cy.wait(5000)
     
        //Click on Select provider option and verify provider 


        cy.get(':nth-child(3) > .q-field > .q-field__inner > .q-field__control').click()

       cy.contains('Clinic Rimen').click()
       cy.wait(4000)
       cy.get('.q-notification').should('contain','Your order has been saved in draft')
       cy.wait(3000)

       //Verify the patients details page 

       
       cy.get(':nth-child(2) > :nth-child(2) > .info-label').should('contain','Patient Name') //Verify the Patient Name

       cy.get(':nth-child(3) > .info-label').should('contain','Date of Birth')

       //Verify the Clinic Name 

       cy.get(':nth-child(8) > .info-label').should('contain','Assigned Clinic')
       


       //Click on Next Button 

       cy.get('.submit > .q-btn').click()



    

      //Go to foot Model page and verify the Foot Model Page 

      cy.get('.q-mt-xs > .labelCardTitle').should('contain','Foot Model')

      //Click on UploadScan arrow button 

      cy.get('#uploadScan > .q-expansion-item__container > .q-item').click()


      cy.get('.q-field__append').click()



      
       
        


       cy.xpath("//div[contains(text(),'Right Foot Orthosis')]").click()

       cy.wait(8000)

       // Upload stl File from Fixtures location for Left Site  
       
       cy.get('.q-px-md > .col-grow').attachFile('Good.stl', {subjectType: 'drag-n-drop' }); 

       cy.wait(30000)
         
      // Enter Mall and Foot Model

      cy.get(':nth-child(7) > .q-expansion-item__container > .q-item').click()

      cy.get('.q-my-md > .q-field > .q-field__inner > .q-field__control').type("23242")
      


      //Click on Food Model Next button 

      cy.get('.submit > .q-btn').click()   //Click on Next button 
       
            


 



       //Go to Select Orthotic page and select Logic 2 

       cy.get('#prebuild-53 > .container').click({ force: true });





       //Select Logic 2 ortho 

       cy.get('.button-container > .q-btn').click()    

       //select Congruency 

       cy.get('#Congruency-8').click() //Click on Arch Height
 

       cy.get('#nav-category-1').click()  //Click on Covering category

       //Select Covering 

       cy.xpath("//div[@id='Covering-14']").click()


       //Click on Order Review Button 

       cy.get('.submit > .q-btn').click()
       cy.wait(4000)
       cy.get('.confirm-title').should('contain','Confirm Your Order Details')

       cy.get('div.full-width > .q-btn').click()   //Click on place order 
       cy.wait(4000)

       cy.get('.text-secondary > :nth-child(7)').should('contain','Submitted')
       cy.wait(4000)

       cy.get('.orders-page__title').should('contain','Orders')




       












     

    


  

    })

  
});