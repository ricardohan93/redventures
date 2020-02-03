# Red Ventures

## O que é

Um _simulador de plantas_, baseado no [layout](https://front-static-recruitment.s3.amazonaws.com/greenthumb-FrontRecruiting.pdf) dado.

## Como rodar

_Os próximos passos assumem que você possui Git instalado em sua máquina. Caso contrário, você pode baixá-lo [aqui](https://git-scm.com/downloads)_

### 1. Clone esse projeto em sua máquina pessoal, a partir do github.

#### Você tem 3 jeitos de fazer isso:

1. Clone com HTTPS. É aberto e funciona em todo lugar.

```sh
git clone https://github.com/ricardohan93/redventures.git
```

2. Clone com SSH - é necessário ter um SSH keypair na sua máquina e um campo _public key_ configurado na sua conta do github

```sh
git clone git@github.com:ricardohan93/redventures.git
```

3. Faça um download do ZIP, clicando no botão **Clone or download** [aqui](https://github.com/ricardohan93/redventures)

### 2. Entre na pasta do projeto baixado, usando seu terminal e o comando `cd`:

Exemplo:

```sh
cd Documents/projects/redventures
```

### 3. Dentro da pasta /redventures, instale as dependências e rode o projeto

```sh
npm install && npm start
```

**Isso assume que você tem o npm instalado.**

### 4. Veja seu projeto rodando na porta 3000

No seu browser, acesse localhost:3000 e navegue pelo projeto. Espero que você goste!

## Estrutura

```
src/
├── assets/
│
├── components/
│   ├── icons/
|
├── layouts/
├── modules/
├── services/
├── styles/
├── styles/
└── App.js
```

> **↳ /assets**
> São os arquivos estáticos usados na aplicação. Em sua maioria são imagens em formato .png.

> **↳ /components**
> São componentes genéricos e reutilizáveis por todo o projeto. Aqui há componentes como Button, Text, Icon...

> **↳ /layouts**
> Arquivos presentes aqui são responsáveis por dar estrutura visual a uma determinada página. Podem ser reutilizados através do projeto.

> **↳ /modules**
> A pasta mais importante do projeto, são containers com a lógica e estrutura geral de determinada página ou sessão do projeto. Um módulo pode ter componentes internos, específicos desse módulo, localizados na pasta /moduleName/components

> **↳ /services**
> Contém as rotas para se comunicar com o mundo externo. Como são poucas rotas no projeto, todas estão concentradas em apenas um arquivo.

> **↳ /styles**
> São os arquivos com design tokens, reutilizáveis por todo o projeto. Isso ajuda na padronização de cores, espaçamentos, tamanho de fonte, etc..

> **↳ /utils**
> Funções que auxiliam no desenvolvimento do projeto

## Stack utilizada

O projeto foi iniciado usando **create-react-app**.

- **React** como framework principal
- **EmotionCSS** como framework CSS
- **React Router** como lib de router
- **Axios** como lib para pegar dados externos

## Principais decisões do projeto

### Uso de React Context e useReducer

Decidi usar um estado global para armazenar dados das plantas vindas da API. Ao invés de instalar uma biblioteca de gerenciamento de estados como Redux, usei um pattern bem legal que segue a mesma lógica do Flux, fazendo _dispatch_ em action para alterar o estado global do react context.

### Uso de CSS in JS

Sei que é um tema polêmico e muitas pessoas não gostam de libs CSS-in-JS, mas particularmente gosto bastante de acoplar os estilos em um componente, e torná-lo reutilizável por todo o projeto.

### Módulos são containers

Toda a lógica do projeto é concentrado no módulos. Dessa forma, nenhum componente ou arquivo de layout é responsável por gerenciar regras de negocio ou qualquer outra coisa que não seja UI.

## Finalmente

Espero que gostem do projeto! Caso haja alguma dúvida, não hesitem em entrar em contato =)
