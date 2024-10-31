// src/components/navbar/Navbar.test.jsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Para simular o roteamento
import Navbar from './Navbar'; // Importa o componente Navbar

describe('Navbar', () => {

  // Verifica se o navbar possui a mensagem "Use os links abaixo para navegar"
  test('renders the navigation message', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Verifica se o texto está presente no componente
    const messageElement = screen.getByText(/use os links abaixo para navegar/i);
    expect(messageElement).toBeInTheDocument();
  });

  // Verifica se os botões estão renderizados e se possuem o texto correto
  test('renders all navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Verifica se os links estão presentes
    const homeLink = screen.getByRole('button', { name: /página inicial/i });
    const partnersLink = screen.getByRole('button', { name: /ver lista de parceiros/i });
    const companiesLink = screen.getByRole('button', { name: /ver lista de empresas/i });
    const logoutButton = screen.getByRole('button', { name: /sair/i });

    expect(homeLink).toBeInTheDocument();
    expect(partnersLink).toBeInTheDocument();
    expect(companiesLink).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });

});
