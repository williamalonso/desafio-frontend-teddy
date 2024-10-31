// src/components/navbar/Navbar.test.jsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Para simular o roteamento
import Navbar from './Navbar'; // Importa o componente Navbar

describe('Navbar', () => {
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
});
