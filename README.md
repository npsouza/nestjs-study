## Description

Testing [Nest](https://github.com/nestjs/nest), [Prisma](https://www.prisma.io/docs) and [VS Code Devcontainer](https://code.visualstudio.com/docs/devcontainers/containers) together.

## Setup

### Requirements
- [Docker](https://docs.docker.com/engine/install/)

### Developing inside a container
Does not required Node installation.
- Install [VS Code](https://code.visualstudio.com/download)
- Install [Devcontainer Extension](https://code.visualstudio.com/docs/devcontainers/tutorial)
- Use `.devcontainer.json` file in project
> Start VS Code, run the `Dev Containers: Open Folder in Container...` command from the Command Palette (F1) or quick actions Status bar item, and select the project folder you would like to set up the container for. More details [here](https://code.visualstudio.com/docs/devcontainers/containers#_quick-start-open-an-existing-folder-in-a-container)

### Outside a container?
- Install [Node >= 20](https://nodejs.org/en/download/package-manager)
- Run `npm install`
- Run `docker compose up -d`

### Running migrations
- Run `npx prisma migrate dev`

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
