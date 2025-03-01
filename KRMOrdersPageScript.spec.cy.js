describe('Test Case: KRM Orders Page Testing', () => {

    beforeEach(() => {
      // Visit the application
      cy.visit('https://kevinroot.test.sandbox3000.com/auth/login') // Replace with your application's URL
      cy.wait(10000)

            // Attempt to log in
            cy.get(':nth-child(1) > .q-field > .q-field__inner > .q-field__control').type('rimen@itconquest.com');
  
            cy.wait(5000)
            cy.get('.q-mb-md > .q-field > .q-field__inner > .q-field__control').type('123456');
            cy.wait(8000)
        
            cy.get('.q-btn__content').click()
            cy.wait(5000)

    });
  
   
     //Validate the Patients Page and Go to page page.

    it('Go to the Orders page and Create Orders', () => {

      cy.contains('Orders').click()  // CLick on Oome page

      cy.get('.orders-page__title').should('contain','Orders')   // Verify the Orders page  

      
 
      

    //cy.xpath("//a[@class='q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle q-btn--rounded q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase navButton q-mr-sm']").click()
    // Click on Patients Link 

        //cy.get('.patients-page__title').should('contain','Patients')  // Verify the patients page 


        //cy.get('.q-mb-md > div[data-v-02ba3510=""] > .q-btn').click()  //Click on Add New Patients button

        




       

  });
  
})