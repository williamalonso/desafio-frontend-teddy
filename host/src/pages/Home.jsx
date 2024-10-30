// src/components/Home.jsx
import React from 'react';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Bem-vindo ao Aplicativo Host</h1>
      <Navbar />

      <div style={{ marginTop: '30px', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <h2>Sobre o Projeto</h2>
        <p>
          Este projeto é uma aplicação modular desenvolvida utilizando o conceito de <strong>Micro Frontends (MFE)</strong>. 
          A arquitetura é composta por diferentes MFE’s que trabalham em conjunto para fornecer uma experiência integrada, 
          com componentes reutilizáveis e independentes.
        </p>

        <h3>Tecnologias Utilizadas</h3>
        <ul>
          <li><strong>React.js:</strong> Biblioteca principal para construção das interfaces.</li>
          <li><strong>Vite:</strong> Ferramenta para desenvolvimento rápido e empacotamento.</li>
          <li><strong>React Router:</strong> Gerenciamento de rotas na aplicação.</li>
          <li><strong>Axios:</strong> Para consumo de APIs externas.</li>
          <li><strong>MockAPI:</strong> API simulada para teste de funcionalidades.</li>
        </ul>

        <h3>Propósito do Sistema</h3>
        <p>
          O objetivo deste sistema é demonstrar como micro frontends podem ser usados para dividir e organizar
          grandes aplicações, mantendo cada parte independente e modular. Isso permite que diferentes equipes 
          trabalhem de forma simultânea e que novas funcionalidades sejam adicionadas com maior facilidade.
        </p>

        <h3>Sentimento do Desenvolvedor</h3>
        <p>
          Desenvolver este projeto foi uma experiência enriquecedora e desafiadora. A abordagem de micro frontends
          trouxe uma nova perspectiva sobre a construção de sistemas escaláveis e modulares. Ver todas as peças se 
          unirem em uma aplicação integrada é gratificante e motiva a continuar explorando novas tecnologias.
        </p>
      </div>
    </div>
  );
};

export default Home;