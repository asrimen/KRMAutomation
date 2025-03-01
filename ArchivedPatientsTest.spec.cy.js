  /// <reference types="cypress" />

    
describe('Test Case: KRM Patients Archived Test case', () => {




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


 

it('Archive The patients and Verify the Archive Patiens', () => {

    


    cy.get('.q-item > :nth-child(3) > .q-btn').click()  // Click on Patients Link 

    cy.get('.patients-page__title').should('contain','Patients')  // Verify the patients page 


    cy.get(':nth-child(1) > :nth-child(7) > div > .q-btn--rectangle').click() // Go to the patients link to add 

    cy.wait(4000)
    cy.get('.msgtitle').should('contain','Archive Patient?')
    cy.wait(4000)
    cy.get('.q-pa-sm > .q-mt-md > .q-btn').click()

    cy.get('tbody.q-pa-none > :nth-child(1) > :nth-child(7)').should('contain' , 'Archived')

    cy.wait(4000)


});
});

