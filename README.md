<div align="center">
  <h1>Projeto de Micro-Frontend</h1>
</div>

<div align="center">
  <img src="/host/public/home.png" alt"Home page" title="Home page" width="600" />
</div>

## 🤔 Sobre o Projeto?

Este projeto é um desafio de frontend utilizando a arquitetura de micro-frontends. O objetivo é demonstrar como diferentes partes de uma aplicação podem ser desenvolvidas, implantadas e executadas de forma independente.

## 📋 Requisitos

Este projeto foi desenvolvido como parte de um desafio técnico e inclui as seguintes funcionalidades:

- **Página de Login**: Permite que o usuário digite o nome de usuário e senha. Ao clicar em "Entrar", o sistema redireciona para a página inicial (não é necessária autenticação real).
- **Funcionalidade "Manter Conectado"**: Se o checkbox "Manter conectado" for marcado, o nome de usuário é salvo no cookie. Caso contrário, é salvo no localStorage.
- **Persistência de Usuário**: A aplicação busca o nome do usuário no cookie ao acessar a página inicial.

### Funcionalidades das Páginas

- **Página Inicial**: Página com uma descrição sobre o projeto, tecnologias utilizadas e sua finalidade.
- **Página Partners**: Página que exibe uma tabela de Parceiros, com paginação e inclui opções de cadastro, edição e exclusão.
- **Página Companies**: Página que exibe uma tabela de Empresas Externas, com paginação e inclui opções de cadastro, edição e exclusão.
- **Sair**: Redireciona o usuário de volta para a página de login.

### Funcionalidade de Compartilhamento de Dados

- **Compartilhamento de Tabela**: A aplicação permite compartilhar links de páginas específicas de uma tabela. Por exemplo, ao compartilhar um link da página 3 de uma tabela paginada, o destinatário acessará diretamente essa página. Caso o usuário não esteja logado, será redirecionado para a página de login e, em seguida, para a página compartilhada.

## 🔍 Como Funciona?

Na imagem acima, a área em vermelho foi desenvolvida no diretório "remote", enquanto a área azul corresponde ao diretório "host". Essas áreas se comunicam através da passagem de propriedades (props) de um micro-frontend para o outro.



## 🙅 Tecnologias usadas

- **React**: `^18.3.1`
- **Vite**: `^5.4.9`
- **[vite-plugin-federation](https://github.com/originjs/vite-plugin-federation)**: `^1.3.6` - Plugin para micro-frontends usando Vite.
- **Vitest**: `^2.1.4`
- **Cypress**: `^13.15.1`


## 🚀 Deploy

Você pode visualizar o deploy do projeto [aqui](https://desafio-frontend-teddy.vercel.app/).



## 🐳 Executando o Projeto com Docker

O projeto está configurado para rodar em Docker. Para iniciar os serviços, basta executar o comando abaixo na pasta raiz do MFE pai (pasta host):

```bash
  docker-compose up --build
```



## 💻 Rodando o App Localmente

Para executar o aplicativo em sua máquina local, siga os passos abaixo:

1. No MFE filho (pasta remote), execute:

```
npm run build && npm run serve
```

2. Em seguida, no MFE pai (pasta host), execute:

```
npm run dev
```

## 🧪 Executando os Testes

Este projeto possui um sistema de testes implementado com o Vitest e Cypress.

### Testes Unitários e de Componentes com Vitest

1. Navegue até o diretório "host".
2. Execute o comando:

```
npm run test
```

### Testes End-to-End com Cypress

1. Certifique-se de que o servidor está rodando localmente em `http://localhost:5173`.
2. Navegue até o diretório "host".
3. No terminal, execute o comando:
```
npx cypress open
```
3. No Cypress, selecione o teste desejado para execução.

## 🌐 Acessando o Aplicativo

Após executar os comandos acima, você pode acessar as seguintes URLs no seu navegador:

- Se estiver rodando localmente:
  - [http://localhost:5001](http://localhost:5001) (MFE filho)
  - [http://localhost:5173](http://localhost:5173) (MFE pai)

- Se estiver rodando no Docker:
  - [http://localhost:5001](http://localhost:5001) (MFE filho)
  - [http://localhost:5000](http://localhost:5000) (MFE pai)
