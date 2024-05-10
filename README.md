# Screen Stats

## Descrição
Screen Stats é uma aplicação web desenvolvida com o framework NestJS para fornecer uma plataforma de streaming de vídeos. O objetivo principal da aplicação é permitir que os usuários visualizem uma variedade de filmes e séries disponíveis para assistir, além de fornecer recursos como autenticação de usuários, gerenciamento de perfil e estatísticas de visualização.

## Funcionalidades Principais
- Visualização de filmes e séries disponíveis
- Autenticação de usuários com JWT
- CRUD completo de usuários
- Estatísticas de visualização de conteúdo

## Tecnologias Utilizadas
- **NestJS**: Framework de aplicativo back-end baseado em Node.js
- **TypeORM**: ORM para interagir com bancos de dados relacionais
- **JWT (JSON Web Tokens)**: Para autenticação de usuários
- **PostgreSQL**: Banco de dados relacional para armazenar dados de usuário e conteúdo
- **Angular**: Framework de desenvolvimento de aplicativos da web para o front-end
- **HTML/CSS**: Para a estruturação e estilização das páginas

## Estrutura do Projeto
O projeto está estruturado da seguinte forma:
- **src/**
  - **auth/**: Contém arquivos relacionados à autenticação de usuários, como guards e estratégias JWT.
  - **movies/**: Arquivos relacionados à manipulação de filmes e séries, incluindo controladores, serviços e entidades.
  - **users/**: Arquivos relacionados à manipulação de usuários, incluindo controladores, serviços, entidades e DTOs.
  - **app.module.ts**: Arquivo de configuração principal do NestJS, onde os módulos são importados e configurados.
  - **main.ts**: Arquivo de entrada do aplicativo, onde o aplicativo NestJS é inicializado.

## Configuração
1. **Instalação de Dependências**: Execute `npm install` na raiz do projeto para instalar todas as dependências necessárias.
2. **Configuração do Banco de Dados**: Certifique-se de ter um servidor PostgreSQL em execução e configure as credenciais de acesso no arquivo `ormconfig.json`.
3. **Execução do Servidor**: Execute `npm run start:dev` para iniciar o servidor de desenvolvimento localmente.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue para relatar problemas ou propor novos recursos. Se desejar contribuir com código, por favor, siga as diretrizes de contribuição do projeto.

## Licença
Este projeto é licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
