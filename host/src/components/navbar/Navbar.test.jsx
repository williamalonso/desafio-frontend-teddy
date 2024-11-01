// src/components/navbar/Navbar.test.jsx
import { render, screen, fireEvent  } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Para simular o roteamento
import Navbar from './Navbar'; // Importa o componente Navbar
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

// Mock do useNavigate do react-router-dom
import { useNavigate } from 'react-router-dom';
import { vi } from 'vitest';

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: vi.fn(), // Mock do useNavigate
  };
});

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

  test('chama handleLogout ao clicar no botão de logout', () => {
    const navigateMock = vi.fn();
    useNavigate.mockReturnValue(navigateMock);

    // Configura localStorage e cookies
    localStorage.setItem('user', 'teste');
    document.cookie = 'user=teste';

    // Renderiza o Navbar dentro de BrowserRouter
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Seleciona e clica no botão de logout
    const logoutButton = screen.getByRole('button', { name: /sair/i });
    fireEvent.click(logoutButton);

    // Verifica se handleLogout funciona conforme esperado
    expect(localStorage.getItem('user')).toBeNull();
    expect(document.cookie).not.toContain('user=teste');
    expect(navigateMock).toHaveBeenCalledWith('/login');
  });

});
