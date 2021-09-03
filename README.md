# api-hex-arch-express-types

<p align="center">
  <a href="" rel="noopener">
 <img width=500px height=350px src="https://1.bp.blogspot.com/-PmNwKrQjdLY/YTDU_RQVwAI/AAAAAAAAIQA/I3aVBdzrLFkBGP5FGwWydqX7ib09eGoOQCLcBGAsYHQ/s1080/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy84NDI5MTgwLTg4NzVlMjRlNDEyYjQ2Njc.png" alt="Project logo"></a>
</p>

<h3 align="center">Hexagonal Architecture</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/sistemasnegros/api-hex-arch-express-types/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/sistemasnegros/api-hex-arch-express-types/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> This repository contains an example of hexagonal architecture.
    <br> 
</p>

- Clean Architecture by Uncle Bob.
- The Onion Architecture.
- Separate infrastructure from business logic.
- The inputs and outputs in border the our design.

## Definitions

- Entities: They are the objects business.
- Interactors: They are the functions that interact with entities, business logic.
- Repositories: They are interface operations with entities for example getbyId, getAll, save.
- Transport Layer: Its the method the communication for example: http or SQS (Input andOutput).
- Data Sources: They are Class that implement the functions the repositories.

## Table of Contents

- [About](#about)
- [Tree Project](#tree_project)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## About <a name = "about"></a>

This project contains an example of hexagonal architecture

## Tree Project <a name = "tree_project"></a>

```
├─ src
│  ├─ controllers
│  │  └─ http
│  │     └─ PokemonController.ts
│  ├─ core
│  │  ├─ entities
│  │  │  └─ Pokemon.ts
│  │  ├─ interactors
│  │  │  ├─ index.ts
│  │  │  └─ pokemonInteractor.ts
│  │  └─ repositories
│  │     └─ pokemonRepository.ts
│  ├─ dataSources
│  │  ├─ PokemonDataSource.ts
│  │  └─ sequelize
│  │     ├─ index.ts
│  │     └─ PokemonModel.ts
│  └─ server
│     └─ index.ts
```

## Getting Started <a name = "getting_started"></a>

```
git clone https://github.com/sistemasnegros/api-hex-arch-express-types

```

### Prerequisites

```
node v14.17.6
Mysql

```

### Installing

```
npm install
```

## Usage <a name = "usage"></a>

```
npm run dev
```

## ✍️ Authors <a name = "authors"></a>

- [@sistemasnegros](https://github.com/sistemasnegros) - Idea & Initial work

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- [Based in video the Samuel Andreo](https://www.youtube.com/watch?v=b5ngTWAPNeg)
