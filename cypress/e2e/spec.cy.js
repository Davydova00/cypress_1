describe('Проверка главной страницы', () => {
  it('Тест 1', () => {
    cy.visit('/');
    cy.wait(10000);
    //cy.get('.cookies-module__block-btns___Zm24R > .button-module__button-success___rsQCA').click();
    // cy.get('#animated-container #credentials-picker-container #picker-header [role="button"].Bz112c-ZmdkE').click({force: true});
    cy.get('.gtm-join-free').should('exist').click();
    cy.get('.socialAuth-module__form-autification__footer___0vqGz > .button-module__button___4j-PY')
      .should('contain', ' with Facebook');
    cy.get('.auth-module__main-img___Rc8of')
      .should('have.attr', 'src')
      .and('include', 'https://storage.uadreams.com/content/');
    cy.get('.socialAuth-module__footer-autification__list___v655O')
      .should('have.length',1);
    cy.contains('Privacy Policy')
      .should('have.attr', 'href')
      .and('equal', 'https://policies.google.com/privacy'); //

    cy.contains('span', 'E-mail').as('mail');
    cy.get('@mail').type('bober@gmail.com');

    cy.contains('span', 'Password').as('password');
    cy.get('@password').type('123456');

    // cy.contains('span', 'Create account').as('Create');
    // cy.get('@Create').click({force: true});
  });
});
