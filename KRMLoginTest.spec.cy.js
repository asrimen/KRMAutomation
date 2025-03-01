describe('Test Case: Clear KRM Application Storage and Validate Behavior', () => {
  beforeEach(() => {
    // Visit the application
    cy.visit('https://kevinroot.test.sandbox3000.com/auth/login') // Replace with your application's URL
    cy.wait(10000)
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

    // Attempt to log in
    cy.get(':nth-child(1) > .q-field > .q-field__inner > .q-field__control').type('rimen@itconquest.com');

    cy.wait(5000)
    cy.get('.q-mb-md > .q-field > .q-field__inner > .q-field__control').type('123456');
    cy.wait(8000)

    cy.get('.q-btn__content').click()
    cy.wait(5000)


    // Validate successful login
    cy.get(':nth-child(2) > .sectionTitle').should('contain','Explore Custom Options')

    //Close Google Browser password manager window 
    cy.wait(4000)
    //cy.contains('OK').click({force: true});

    //cy.get('.disabled-button').click({ force: true });




  });
});

