// src/components/home/HomeComponent.test.jsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Para simular o roteamento
import HomeComponent from './HomeComponent'; // Importa o componente HomeComponent

describe('HomeComponent', () => {
  test('renders welcome message and project details', () => {
    render(
      <MemoryRouter>
        <HomeComponent />
      </MemoryRouter>
    ); // Renderiza o componente

    // Verifica se a mensagem de boas-vindas é renderizada
    const welcomeMessage = screen.getByRole('heading', { name: /bem-vindo/i });
    expect(welcomeMessage).toBeInTheDocument();

    // Verifica se o componente Navbar está presente
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument(); // Assumindo que Navbar possui um papel de navegação

    // Verifica se a seção "Sobre o Projeto" é renderizada
    const aboutSection = screen.getByRole('heading', { name: /sobre o projeto/i });
    expect(aboutSection).toBeInTheDocument();

    // Verifica se o conteúdo do projeto está presente
    const projectDescription = screen.getByText(/este projeto é uma aplicação modular desenvolvida utilizando o conceito de/i);
    expect(projectDescription).toBeInTheDocument();

    // Verifica se a seção "Tecnologias Utilizadas" está presente
    const technologiesSection = screen.getByRole('heading', { name: /tecnologias utilizadas/i });
    expect(technologiesSection).toBeInTheDocument();

    // Verifica se o propósito do sistema está presente
    const purposeSection = screen.getByRole('heading', { name: /propósito do sistema/i });
    expect(purposeSection).toBeInTheDocument();

    // Verifica se a seção "Sentimento do Desenvolvedor" está presente
    const sentimentSection = screen.getByRole('heading', { name: /sentimento do desenvolvedor/i });
    expect(sentimentSection).toBeInTheDocument();
  });
});