<h1 align="center">Library CRUD</h1>

<p align="center">
  <img
    alt="GitHub top language"
    src="https://img.shields.io/github/languages/top/kauefraga/crud-library.svg"
  />
  <img
    alt="Repository size"
    src="https://img.shields.io/github/repo-size/kauefraga/crud-library.svg"
  />
  <a href="https://github.com/kauefraga/crud-library/commits/main">
    <img
      alt="GitHub last commit"
      src="https://img.shields.io/github/last-commit/kauefraga/crud-library.svg"
    />
  </a>
  <img
    alt="GitHub LICENSE"
    src="https://img.shields.io/github/license/kauefraga/crud-library.svg"
  />
</p>

<h4 align="center">📚 A restful API that create, read, update and delete book stuff 📚</h4>

## ✨ Features

- **Architecture**: Monolithic
- **Lint**: Eslint (config-airbnb-typescript)
- **Code good practices**
  - [ ] Unit tests
  - [ ] Repositories pattern
- **API production-quality**
  - [x] Versioning (`/v1...`)
  - [x] Status endpoint
  - [x] Request limitations
  - [x] Standard response

## ⬇️ How to develop and contribute

```bash
git clone https://github.com/kauefraga/crud-library.git
cd crud-library

npm install
npm run dev

# If you want to run tests
npm run test
```
Or downloading with yarn? `yarn && yarn dev`
<br/>
Sincerely, i prefer pnpm so: `pnpm i && pnpm dev`

## 🐳 How to set up Postgres
```sh
# if you get an error try sudo mode
docker run --name postgresql bitnami/postgresql:latest
docker-compose up -d
```
source: https://hub.docker.com/r/bitnami/postgresql

## 💻 Technologies

- 🔥 [CORS](https://npm.im/cors) - Required when we need to control who can access our endpoints
- 🐳 [Docker](https://www.docker.com) - Use virtualization/containerize to turn your "work on my machine" into "our machine"
- 🤫 [Dotenv](https://npm.im/dotenv) - We must hide our secret keys, with dotenv we can load env variables into `process.env` more easily
- 💄 [Eslint](https://eslint.org) - Set code rules and help to keep it
  - https://www.npm.im/eslint-config-airbnb-base
  - https://www.npm.im/eslint-config-airbnb-typescript
- 🔮 [Express](https://expressjs.com) - "Fast, minimalist web framework for Nodejs..."
- 🐘 [Postgres](https://npm.im/postgres) - PostgreSQL is a relational database. It is the driver implementation for nodejs
- ⚗️ [Vitest](https://vitest.dev) - Test runner that implements Jest but with its own ESbuider (out of box typescript, esmodules...)
- 🧑‍💻 Developed on [Typescript](https://typescriptlang.org) + [TS-Node-Dev](https://npm.im/ts-node-dev) - Improve dev experience by adding type safety

## 🛣 Routes

```bash
# Status endpoint
GET /v1/status

# Read and return books
GET /v1/books

# Search for a specific book and return it
GET /v1/books/:id

# Create a new book
POST /v1/books

# Update a specific book
PUT /v1/books/:id

# Delete a specific book
DELETE /v1/books/:id
```

## 📝 License

This project is licensed under the MIT License - See the [LICENSE](https://github.com/kauefraga/crud-library/blob/main/LICENSE) for more information.

---

<div align="center">
  <img alt="Built with love" src="https://forthebadge.com/images/badges/built-with-love.svg">
  <img alt="Powered by coffee" src="https://forthebadge.com/images/badges/powered-by-coffee.svg">
</div>
