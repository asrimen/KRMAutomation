  /// <reference types="cypress" />

  import 'cypress-file-upload';
  import { contains } from 'validator';
  import { faker } from '@faker-js/faker';




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


    })
  
    it('Should perform a new login after clearing storage', () => {
      // Clear application storage
      cy.clearLocalStorage();
      cy.window().then((win) => {
        win.sessionStorage.clear();
      });
      cy.clearCookies();
  
    });


  
    it('Should Go To Order page and Click on New Order Button submit New order with New Patients create', () => {



            //Create Random Name and Email 

      const randomFirstName = faker.name.firstName();
            const randomLastName = faker.name.lastName();
            const randomEmail = faker.internet.email(randomFirstName, randomLastName)


    //Click on Order button from top navigiation page
    cy.xpath("//a[@class='q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle q-btn--rounded q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase navButton q-mr-sm']").click({force : true})
    
    //Verify the order page
    cy.xpath("//div[@class='orders-page__title']").should('contain','Orders')


    //Click on Add New orders 
     cy.wait(5000)
     cy.get('.q-btn__content').contains('New Order').click({force : true})
 




    //Select Provider
    cy.wait(5000)
    cy.get('label.q-select') // Target the dropdown by its class
      .click();                // Open the dropdown     
    cy.contains("Clinic Rimen").click()
     cy.wait(4000)

      

     cy.wait(5000)


    // Enter Names and Date

    cy.get('input[placeholder="Enter patient\'s first name"]').click().type(randomFirstName);
    cy.get('input[placeholder="Enter patient\'s last name"]').click().type(randomLastName)

    cy.get('[top=""] > .q-field > .q-field__inner > .q-field__control').clear().type('11/11/1990')
    cy.wait(5000)
    
    //Click on See more button 

    cy.get('.cursor-pointer > span').click()

    
    // Update the Patients information 

    //Select sex from drop down list

    cy.get(':nth-child(1) > :nth-child(2) > .q-select > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native').click()


    cy.contains("Male").click()

    cy.get('input[placeholder="Enter patient\'s email"]')
    .type(randomEmail)

    cy.wait(4000)



    cy.get('.button-container1 > .q-btn > .q-btn__content').click()

    cy.wait(6000)

    // GO to Foot Model Page and Upload the files 
    

    cy.get('#uploadScan > .q-expansion-item__container > .q-item').click()

    cy.get('.q-field__append').click()
    cy.wait(4000)

    cy.contains('Right Foot Orthosis').click()
    cy.contains('Click to upload').attachFile('Good.stl', {subjectType: 'drag-n-drop' }); 




    
  

  
    }); 

  })

