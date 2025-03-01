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

 //cy.contains('Zip').type('10001')


 //cy.xpath("//input[@id='f_514abb8e-8728-4c1d-b70b-2dd917c183c2']").type('100001')

 //cy.xpath("//body[@class='desktop no-touch body--light q-body--force-scrollbar-y q-body--prevent-scroll']/div[@id='q-portal--dialog--1']/div[@class='q-dialog fullscreen no-pointer-events q-dialog--modal']/div[@class='q-dialog__inner flex no-pointer-events q-dialog__inner--minimized q-dialog__inner--standard fixed-full flex-center']/div[@class='q-card q-card--flat no-shadow q-pa-md']/div[@id='patient-form']/form[@class='q-form']/div[@class='col']/div/label[@class='q-field row no-wrap items-start q-field--outlined q-select q-field--auto-height q-select--without-input q-select--without-chips q-select--single q-field--float q-field--dense q-mb-lg']/div[@class='q-field__inner relative-position col self-stretch']/div[@class='q-field__control relative-position row no-wrap text-secondary']/div[2]")
 //cy.contains('United State').click() 
//cy.xpath("//div[@class='q-item__label']//span[contains(text(),'Bangladesh')]").click()


 cy.wait(3000)
 cy.get(':nth-child(2) > :nth-child(1) > .justify-between').type('190')  

 cy.get(':nth-child(2) > .justify-between > .q-select > .q-field__inner > .q-field__control > .q-field__append').click()
 cy.contains('kgs').click()

 cy.get(':nth-child(2) > .justify-between').type('90')  //Select Kgs 
 
 cy.wait(3000)

 cy.get(':nth-child(3) > .q-field > .q-field__inner > .q-field__control').click()  // Select Country 
 cy.contains('UK').click()

 cy.get(':nth-child(3) > :nth-child(2) > .q-field > .q-field__inner > .q-field__control').click()

 cy.contains("Men's").click()

 cy.wait(3000)
 //cy.get(':nth-child(8) > :nth-child(3) > :nth-child(1) > .q-field > .q-field__inner > .q-field__control').click()

 //cy.contains('8').click()
 cy.wait(3000)
 cy.get('.q-mb-lg > .q-btn--unelevated').click()  // Click on Save 
 
 cy.get('.q-notification').should('contain', 'Successfully Created') //Check the successfully message 




  
});
});
