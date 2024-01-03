<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript auth project offers a secure and scalable foundation for building robust and secure systems by leveraging industry-standard best practices.

JWT access and refresh tokens are used for user authorization. Access tokens have a 15-minute lifespan and can be refreshed using longer-lived refresh tokens, which have a lifespan of one week. Refresh tokens are cached in Redis and can be invalidated by users.

Role-based access control is implemented, with some endpoints restricted to admin users only.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# docker compose
$ docker compose up
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
