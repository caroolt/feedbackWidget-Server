

<h1 align="center">FeedGet Server</h1>

![issues](https://img.shields.io/github/issues/caroolt/feedbackWidget-Web?color=red) ![license](https://img.shields.io/github/license/caroolt/feedbackWidget-Web)

<!-- Imagem que representa o que o projeto faz-->
|![Imagem demonstrando o projeto que é um chat onde o usuário pode enviar um Feedback (bug, ideia de melhoria e qualquer outro feedback)](./img/readme.png) | 
| :---: |

## Index
  1. [Descrição do Projeto](#descrição)
  2. [Técnicas e Tecnologias](#tecnologias)
  3. [Abrir e executar o projeto](#executar_o_projeto)
  4. [Features do Projeto](#project_features)
  5. [Pessoas que ajudaram a desenvolver o projecto](#developers)
  6. [English Readme](./READMEEnglish.md)

### Descrição do Projeto 
###### descrição
Este é o server de um projeto que foi pensado para ser algo "Simples", mas que me ajude a estudar reactJS, reactNative (vou fazer a versão mobile) e nodeJS - se preocupando com a acessibilidade. O objetivo do projeto é ser um widget onde o usuário poderá enviar feedback, seja um bug, uma ideia de melhoria ou qualquer outro feedback que não se enquadre nessas outras duas categorias, além disso, o usuário terá a opção de inserir uma imagem da tela, mas este não terá que tirar um print, já que ao clicar no botão o print é feito automaticamente e aplicada no feedback. Ao enviar esse feedback, ele é inserido em um banco de dados e enviado por e-mail aos desenvolvedores.

### Técnicas e Tecnologias
###### tecnologias
- Typescript
- Express
- SQLite (Ambiente DEV)
- Postgresql (Ambiente de produção)
- Prisma

## 🛠️ Abrir e executar o server
###### executar_o_projeto
#### 1- Clone o Projeto

#### 2- Instale todas as dependências
   `npm install`
#### 3- Rode o Prisma
   `npx prisma init`

#### 4- No arquivo schema.prisma copie e cole isto:
```
   generator client {
      provider = "prisma-client-js"
   }

   datasource db {
    provider = "sqlite"
    url      = env("DATABASE_URL")
   }

   model Feedback {
      id String @id @default(uuid())

      type       String
      comment    String
      screenshot String?

      @@map("feedbacks")
   }
   ```
#### 5- Crie as migrations no ambiente de dev ou produção com:
 ```
 //se for ambiente de dev
 
 npx prisma migrate dev

 //se for ambiente de produção

 npx prisma migrate deploy
 ```
#### 6- Execute o server 
   `npm run dev`

#### 7- Passo não obrigatório (caso deseje ver o seu banco de dados sem ter que instalar nada digite o comando no console)
   `npx prisma studio`
   
### 🔨 Features do Projeto ao qual o Server é conectado
###### project_features
- `Hover`:  Ao passar o mouse sob o widget uma transição de cor ocorrerá  e aparecerá um texto escrito 'feedback'
- `Escolha da categoria`: É possível escolher a categoria do feedback ao clicar no widget
- `Print Automático`: Ao clicar no botão (depois de selecionar a categoria) um print automático da tela é tirado e já inserido ao feedback

## Desenvolvedora do projeto
###### developers
| [<img src="https://avatars.githubusercontent.com/u/82682093?s=400&u=0a46c06b6a1ae04f7acf2f2162187b1a7e4d5d53&v=4" width=115><br><sub>Carolina Teixeira Coelho</sub>](https://github.com/caroolt) | 
| :---: |


