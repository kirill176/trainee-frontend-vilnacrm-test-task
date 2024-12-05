describe('test', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('WEBSITE_URL'));
    cy.url().should('include', '/');
  });

  it('должен корректно рендерить форму', () => {
    cy.get('[name="name"]').should('exist');
    cy.get('[name="email"]').should('exist');
    cy.get('[name="phone"]').should('exist');
    cy.get('[name="address"]').should('exist');
    cy.get('button[type="submit"]').should('exist').and('contain', 'Send');
  });

  it('должен отображать ошибки при пустых полях и отправке формы', () => {
    cy.get('[name="name"]').clear();
    cy.get('[name="email"]').clear();
    cy.get('[name="phone"]').clear();

    cy.get('button[type="submit"]').click();
    cy.wait(500);

    cy.get('[name="name"]')
      .closest('.MuiTextField-root')
      .find('.MuiFormHelperText-root.Mui-error')
      .should('be.visible')
      .and('contain', 'Name is required');

    cy.get('[name="email"]')
      .closest('.MuiTextField-root')
      .find('.MuiFormHelperText-root.Mui-error')
      .should('be.visible')
      .and('contain', 'Email is required');

    cy.get('[name="phone"]')
      .closest('.MuiTextField-root')
      .find('.MuiFormHelperText-root.Mui-error')
      .should('be.visible')
      .and('contain', 'Phone is required');
  });

  it('должен очищать форму после успешной отправки', () => {
    cy.get('[name="name"]').clear();
    cy.get('[name="email"]').clear();
    cy.get('[name="phone"]').clear();

    cy.get('[name="name"]').type('John Doe');
    cy.get('[name="email"]').type('john.doe@example.com');
    cy.get('[name="phone"]').type('123456789');
    cy.get('[name="address"]').type('123 Main St');
    cy.get('button[type="submit"]').click();
    cy.get('[name="name"]').should('have.value', '');
    cy.get('[name="email"]').should('have.value', '');
    cy.get('[name="phone"]').should('have.value', '');
    cy.get('[name="address"]').should('have.value', '');
  });
});

export {};
