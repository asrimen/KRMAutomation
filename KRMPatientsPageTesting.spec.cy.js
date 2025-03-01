  /// <reference types="cypress" />
      

       import 'cypress-file-upload';
       import { contains } from 'validator';
       import { faker } from '@faker-js/faker';


       require('cypress-xpath');

       const fileName = 'profilePhoto.jpg';


describe('Test Case: KRM Patients Features with All scenarios', () => {




    beforeEach(() => {
      // Visit the application
      cy.visit('https://kevinroot.test.sandbox3000.com/auth/login') 

      // // Replace with your application's URL
      cy.wait(10000)

            // Attempt to log in
            cy.get(':nth-child(1) > .q-field > .q-field__inner > .q-field__control').type('rimen@itconquest.com');
  
            cy.get('.q-mb-md > .q-field > .q-field__inner > .q-field__control').type('123456');
        
            cy.get('.q-btn__content').click()    

            cy.wait(5000)

    });
  
   
     //Validate the Patients Page and Go to page page.

    it('Go to the Patiens page and Create Patients', () => {
    
      //Create Random Name and Email 

      const randomFirstName = faker.name.firstName();
      const randomLastName = faker.name.lastName();
      const randomEmail = faker.internet.email(randomFirstName, randomLastName)





        cy.get('.q-item > :nth-child(3) > .q-btn').click()  // Click on Patients Link 

        cy.get('.patients-page__title').should('contain','Patients')  // Verify the patients page 

        cy.wait(4000)
        cy.xpath("//div[@class='q-mb-md']//div[@class='row']//button[@type='button']").click()  //Click on Add New Patients button


        cy.get(':nth-child(1) > .q-mr-sm > .q-field > .q-field__inner > .q-field__control').type(randomFirstName);  //User Random Name 

        cy.wait(3000)
        cy.get('.q-mt-md.col > :nth-child(1) > :nth-child(2) > .q-field > .q-field__inner > .q-field__control').type(randomLastName);
        cy.wait(4000)
        cy.get(':nth-child(2) > .q-mr-sm > .q-field > .q-field__inner > .q-field__control').clear().type('01/01/1990')
        cy.wait(4000)
        cy.get('.q-mt-md.col > :nth-child(2) > :nth-child(2) > :nth-child(2) > .q-field > .q-field__inner > .q-field__control').click()

        cy.contains("Male").click()

        cy.get('.q-mt-md.col > :nth-child(3) > .q-mr-sm > .q-field > .q-field__inner > .q-field__control').type(randomEmail);
        cy.wait(4000)
        cy.get(':nth-child(4) > .q-mr-sm > .q-field > .q-field__inner > .q-field__control').type('8801735668986')
        cy.wait(3000)
        cy.get('.input-style').type('Gulshan1')
        cy.wait(200)
        cy.get('.q-mb-sm > :nth-child(2) > .q-field > .q-field__inner > .q-field__control').type("Dhaka")
        cy.wait(3000)
        cy.get('[top=""] > :nth-child(2) > .q-field > .q-field__inner > .q-field__control').type('New York')
        cy.wait(3000)


  


        cy.wait(3000)
       // cy.get(':nth-child(2) > :nth-child(1) > .justify-between').type('190')  

        cy.get(':nth-child(2) > .justify-between > .q-select > .q-field__inner > .q-field__control > .q-field__append').click()
        cy.contains('kgs').click()

        //cy.get(':nth-child(2) > .justify-between').type('90')  //Select Kgs 
        
        cy.wait(3000)
 
        cy.get(':nth-child(1) > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-icon').click()  // Select Country 
        cy.contains('UK').click()

        cy.get(':nth-child(3) > .q-field > .q-field__inner > .q-field__control').click()

        cy.contains("Men's").click()



        cy.wait(3000)

        cy.get(':nth-child(3) > :nth-child(2) > .q-field > .q-field__inner > .q-field__control').click()
        cy.contains("8").click()
        cy.wait(4000)

   
        cy.get('.q-mb-lg > .q-btn--unelevated').click()  // Click on Save 
        cy.wait(5000)
        
        cy.get('.q-notification').should('contain', 'Successfully Created') //Check the successfully message 


      

         
    });

    it('Go to the Patiens Details page and verify all patients data', () => {

        cy.get('.q-item > :nth-child(3) > .q-btn').click()  // Click on Patients Link 

        cy.get('.patients-page__title').should('contain','Patients')  // Verify the patients page 
        
        cy.get('tbody.q-pa-none > :nth-child(1) > :nth-child(1)').click() //Click on First patients details page.

        cy.wait(5000)

         
        //Verify the patients detailst page 

        cy.get('.q-tab--active > .q-tab__content').should('contain','Dashboard')    //Verify Client Dashboard page 

        cy.contains("Details").should('contain','Details') // Verify Details  button

        cy.contains('Encounters').should('contain','Encounters')  //Verify Files page 


        //cy.get('[href="/customers-details/2240?tab=shoe-fit-iq"]').should('contain','ShoeFit IQ') // Verify The medicate data page. 

        //cy.contains('Files').should('Files')  //Verify ShoeFit IQ Measurements area 





  });


  it('Edit Patients Page with pencil Icon and update Image and details ', () => {

        //Create Random Name and Email 

        const randomFirstName = faker.name.firstName();
        const randomLastName = faker.name.lastName();
        const randomEmail = faker.internet.email(randomFirstName, randomLastName)



    cy.get('.q-item > :nth-child(3) > .q-btn').click()  // Click on Patients Link 

    cy.get('.patients-page__title').should('contain','Patients')  // Verify the patients page 
  

    //Click on Edit pencil Button 

    //cy.xpath(".//body[@class='desktop no-touch body--light']/div[@id='q-app']/div[@class='q-layout q-layout--standard']/div[@class='q-page-container']/div/main[@class='q-page q-layout-padding patients-page']/div/div/div[@class='q-pt-lg']/div/div[@id='orders']/table[@class='q-table']/tbody[@class='q-pa-none']/tr[3]/td[7]/div[1]/button[2]/span[2]/i[1]").eq(0).click({force : true})
    cy.get(':nth-child(1) > :nth-child(5) > div > .q-btn--round > .q-btn__content').eq(0).click({force : true})
    //Upload Profile Photo 
    //Upload Photo from Fixtures area 
      cy.get('.q-gutter-md > .q-btn > .q-btn__content').attachFile('profilephoto.jpg', {subjectType: 'drag-n-drop' });

        //.attachFile('profilephoto.jpg'); // Provide the file name from the fixtures folder


    //cy.xpath("//span[@class='click-event']").attachFile('profilephoto.jpg', {subjectType: 'drag-n-drop' });

    //attachFile('QuickTest.docx', { subjectType: 'drag-n-drop' });
    
    //cy.get('.q-btn__content text-center col items-center q-anchor--skip justify-center row').attachFile('profilephoto.jpg'{ subjectType: 'drag-n-drop' }); 
     
    //Crop Photo and Submit crop button
    cy.wait(4000)
    cy.contains('Crop').click()
    cy.wait(4000)
    
    cy.get(':nth-child(1) > .q-mr-sm > .q-field > .q-field__inner > .q-field__control').click().clear().type(randomFirstName) 
    cy.wait(3000)
    cy.get('.q-mt-md.col > :nth-child(1) > :nth-child(2) > .q-field > .q-field__inner > .q-field__control').click().clear().type(randomLastName)
        cy.wait(4000)
        cy.get(':nth-child(2) > .q-mr-sm > .q-field > .q-field__inner > .q-field__control').click().clear().type('01/01/1994')  // Click on Date of birth
        cy.wait(4000)

        cy.get('.q-mt-md.col > :nth-child(2) > :nth-child(2) > :nth-child(2) > .q-field > .q-field__inner > .q-field__control').click()  //Select the Gender

        cy.contains("Female").click()

        cy.get('.q-mt-md.col > :nth-child(3) > .q-mr-sm > .q-field > .q-field__inner > .q-field__control').click().clear().type(randomEmail)

        cy.wait(4000)
        cy.get(':nth-child(4) > .q-mr-sm > .q-field > .q-field__inner > .q-field__control').click().clear().type('0099343454334')

        cy.wait(3000)
        //cy.get('.input-style').click().clear().type('London').click()
        cy.wait(200)
        cy.get('.q-mb-sm > :nth-child(2) > .q-field > .q-field__inner > .q-field__control').click().clear().type("Gulshan2")
        cy.wait(3000)
        cy.get('[top=""] > :nth-child(2) > .q-field > .q-field__inner > .q-field__control').click().clear().type('Update Cypress')
        cy.wait(3000)
        cy.get(':nth-child(6) > .q-mr-sm > .q-field > .q-field__inner > .q-field__control').click().clear().type('10001')

        cy.get(':nth-child(7) > :nth-child(2) > .q-field > .q-field__inner > .q-field__control').click()
        cy.contains('Albania').click() 
        
       
        //Add with placehodler for feet 
        cy.get('input[type="number"][min="1"]').first()
        .should('be.visible')
        .type('8')
        .should('have.value', '8');


        cy.wait(3000)

        cy.get('input[placeholder="Enter weight"]').type('95')  //Select Kgs 
        
        cy.wait(3000)
 
         
        cy.contains('Save Changes').click()
        cy.wait(4000)

       

     });

      
     it('Patients Filter Verify ', () => {
     
      cy.get('.q-item > :nth-child(3) > .q-btn').click() // Click on Patients link 
     cy.xpath("//span[contains(text(),'See Filter Options')]").click()   

     cy.get(':nth-child(1) > :nth-child(1) > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-icon').click()
     cy.contains("QATest").click()

     cy.get('.q-mt-sm > div.col > .row').click({force : true})

     //cy.get('.q-date__calendar-days > :nth-child(5)').click() 

     //cy.get('.secondaryBtn').click();
     cy.get('.q-pt-md > .q-btn').click()
     
     





     



});
})

