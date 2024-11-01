describe('Login Page', () => {

  beforeEach(() => {
    // Visita a página de login antes de cada teste
    cy.visit('http://localhost:5173/login');
  });

  it('Deve permitir o usuário digitar o nome e fazer login', () => {
    // Seleciona o campo de input e digita um nome de usuário
    cy.get('input[placeholder="Digite seu usuário"]').type('testeUsuario');

    // Clica no botão de login
    cy.contains('button', 'Entrar').click();

    // Verifica se redirecionou para a página inicial
    cy.url().should('eq', `http://localhost:5173/`);

    // Verifica se o localStorage contém o nome do usuário
    cy.window().then((win) => {
      const user = win.localStorage.getItem('user'); // Obtém o valor do localStorage
      expect(user).to.equal('testeUsuario'); // Compara o valor
    });
  });

  it('Deve manter o usuário conectado usando cookies', () => {
    // Digita um nome de usuário
    cy.get('input[placeholder="Digite seu usuário"]').type('usuarioCookie');

    // Seleciona a checkbox "Manter conectado"
    cy.get('input[type="checkbox"]').check();

    // Clica no botão de login
    cy.contains('button', 'Entrar').click();

    // Verifica se o cookie "user" foi definido corretamente
    cy.getCookie('user').should('have.property', 'value', 'usuarioCookie');

    // Verifica o redirecionamento
    cy.url().should('eq', `http://localhost:5173/`);
  });

  it('Deve redirecionar para a página de login ao remover o cookie ou localStorage', () => {
      // Adiciona um usuário ao localStorage para simular um login
      localStorage.setItem('user', 'username');
      cy.visit('http://localhost:5173/'); // Visita a página inicial

      // Verifica se o usuário está na página inicial
      cy.url().should('eq', 'http://localhost:5173/'); // Verifica se está na URL da página inicial

      // Remove o cookie ou localStorage
      localStorage.removeItem('user'); // Deleta o usuário do localStorage

      // Dê F5 na página para recarregar
      cy.reload(); // Recarrega a página

      // Verifica se o redirecionamento para a página de login ocorreu
      cy.url().should('eq', 'http://localhost:5173/login'); // Ajuste a URL conforme necessário
  });

});