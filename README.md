# Projeto de Desafio Frontend com Micro-Frontend



### 🤔 Sobre o Projeto?

Este projeto é um desafio de frontend utilizando a arquitetura de micro-frontends. O objetivo é demonstrar como diferentes partes de uma aplicação podem ser desenvolvidas, implantadas e executadas de forma independente.



### 🙅 Tecnologias usadas

- **React**: `^18.3.1`
- **Vite**: `^5.4.9`
- **[vite-plugin-federation](https://github.com/originjs/vite-plugin-federation)**: `^1.3.6` - Plugin para micro-frontends usando Vite.



### 🚀 Deploy

Você pode visualizar o deploy do projeto [aqui](URL_DO_DEPLOY).



### 🐳 Executando o Projeto com Docker

O projeto está configurado para rodar em Docker. Para iniciar os serviços, basta executar o comando abaixo na pasta raiz do MFE pai (pasta host):

```bash
  docker-compose up --build
```



### 💻 Rodando o App Localmente

Para executar o aplicativo em sua máquina local, siga os passos abaixo:

1 . No MFE filho (pasta remote), execute:

```
npm run build && npm run serve
```

2 . Em seguida, no MFE pai (pasta host), execute:

```
npm run dev
```



### 🌐 Acessando o Aplicativo

Após executar os comandos acima, você pode acessar as seguintes URLs no seu navegador:

- Se estiver rodando localmente:
  - [http://localhost:5001](http://localhost:5001) (MFE filho)
  - [http://localhost:5173](http://localhost:5173) (MFE pai)

- Se estiver rodando no Docker:
  - [http://localhost:5001](http://localhost:5001) (MFE filho)
  - [http://localhost:5000](http://localhost:5000) (MFE pai)