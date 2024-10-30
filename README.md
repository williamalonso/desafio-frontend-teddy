### 🤔 Sobre o Projeto?

Esse projeto é um desafio de frontend usando micro-frontend

## 🙅 Instalações e usos

A versão React usada é a `^18`.

Para rodar o docker, navegue até a pasta do projeto e execute:

```
docker build -t remote-app .
```

Isso irá construir a imagem do container.

Execute o seguinte comando para rodar com docker-compose:

```
docker-compose up --build
```

Ou no host, faça o comando a seguir e ele automaticamente executa o container do mfe remote:

```
docker-compose up --build -d
```

apos isso, abra as urls:
http://localhost:5001
e
http://localhost:5000